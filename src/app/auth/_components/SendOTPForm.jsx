"use client";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "@/context/AuthProvider";
import SpinnerMini from "@/ui/SpinnerMini";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";
import { useStepper } from "../_context/StepperProvider";

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .required("لطفا یک شماره موبایل وارد کنید")
      .length(11, "شماره موبایل باید 11 رقم باشد"),
  })
  .required();

function SendOTPForm() {
  const resolver = useYupValidationResolver(schema);
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({ resolver, mode: "onTouched" });
  const { getOtp } = useAuth();
  const { setStep } = useStepper();

  const submitHandler = async (values) => {
    await getOtp(values);
    setStep((prev) => prev + 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-10">
        <TextField
          type="tel"
          isRequired
          name="phoneNumber"
          label="شماره موبایل"
          register={register}
          errors={errors}
          dir="ltr"
        />
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

export default SendOTPForm;
