"use client";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "@/context/AuthProvider";
import SpinnerMini from "@/ui/SpinnerMini";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useStepper } from "../_context/StepperProvider";

const schema = yup
  .object({
    otp: yup
      .string()
      .required("لطفا کد ارسال شده را وارد کنید")
      .length(6, "کد ارسالی باید 6 رقم باشد"),
  })
  .required();

function CheckOTPForm() {
  const resolver = useYupValidationResolver(schema);
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({ resolver, mode: "onTouched" });
  const { checkOtp, user } = useAuth();
  const { setStep } = useStepper();

  const submitHandler = async (values) => {
    const userValue = {
      phoneNumber: user,
      otp: values.otp,
    };
    await checkOtp(userValue);
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <div
          className="flex gap-x-3 mt-2 cursor-pointer"
          onClick={() => setStep((prev) => prev - 1)}
        >
          <ArrowRightIcon className="w-5 h-5" />
        </div>
        <div>
          <TextField
            type="tel"
            isRequired
            name="otp"
            label={`لطفا کد ارسال شده به شماره ${user} را وارد کنید`}
            register={register}
            errors={errors}
            dir="ltr"
          />
        </div>
        <div>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button variant="primary" className="w-full" type="submit">
              ورود
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
