"use client";
import {
  checkUserOtpApi,
  completeUserProfileApi,
  getUserApi,
  getUserOtpApi,
  logoutApi,
} from "@/services/authService";
import { useRouter } from "next/navigation";
import { createContext, use, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

const GET_OTP = "get/otp";
const CHECK_OTP = "check/otp";
const COMPLETE_PROFILE = "complete/profile";
const USER_LOADED = "user/loaded";
const REJECTED = "rejected";
const LOADING = "loading";
const LOGOUT = "logout";

const AuthContext = createContext();

const initialState = {
  user: null,
  cart: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_OTP:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case CHECK_OTP:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case COMPLETE_PROFILE:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        user: action.payload.user,
        cart: action.payload.cart,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...initialState,
        isLoading: false,
      };

    default:
      throw new Error("unknown action!");
  }
};

export default function AuthProvider({ children }) {
  const [{ user, cart, isAuthenticated, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const router = useRouter();

  const getOtp = async (values) => {
    dispatch({ type: LOADING });
    try {
      const { message, phoneNumber } = await getUserOtpApi(values);
      toast(message, {
        icon: "ℹ️",
      });
      dispatch({ type: GET_OTP, payload: phoneNumber });
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errMsg });
      toast.error(errMsg);
    }
  };

  const checkOtp = async (values) => {
    dispatch({ type: LOADING });
    try {
      const { message, user } = await checkUserOtpApi(values);
      dispatch({ type: CHECK_OTP, payload: user });
      toast.success(message);
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errMsg });
      toast.error(errMsg);
    }
  };

  const completeProfile = async (values) => {
    dispatch({ type: LOADING });
    try {
      const { message, user } = await completeUserProfileApi(values);
      dispatch({ type: COMPLETE_PROFILE, payload: user });
      router.replace("/");
      toast.success(message);
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errMsg });
      toast.error(errMsg);
    }
  };

  const getUser = async () => {
    dispatch({ type: LOADING });
    try {
      const { user, cart } = await getUserApi();
      dispatch({ type: USER_LOADED, payload: { user, cart } });
    } catch (error) {
      const errorMsg = error?.response?.data?.message;
      dispatch({ type: REJECTED, payload: errorMsg });
      toast.error(errorMsg);
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
      dispatch({ type: LOGOUT });
      router.replace("/");
      router.refresh();
      toast("شما از حساب خود خارج شدید", {
        icon: "ℹ️",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      getUser();
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        cart,
        isAuthenticated,
        isLoading,
        getOtp,
        checkOtp,
        completeProfile,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = use(AuthContext);
  if (context === undefined) throw new Error("not found Auth context");

  return context;
}
