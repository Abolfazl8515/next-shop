import AuthLayoutClient from "./signin/_components/AuthLayoutClient ";

export const metadata = {
  title: "ورود",
  description: "ورود به برگستان",
};

function AuthLayout({ children }) {
  return <AuthLayoutClient>{children}</AuthLayoutClient>;
}

export default AuthLayout;
