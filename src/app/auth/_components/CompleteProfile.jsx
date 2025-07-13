"use client";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAuth } from "@/context/AuthProvider";
import SpinnerMini from "@/ui/SpinnerMini";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";

const schema = yup
  .object({
    name: yup
      .string()
      .required("وارد کردن نام ضروری است")
      .min(2, "طول اسم باید بیشتر از یک کاراکتر باشد")
      .max(30, "طول اسم باید کمتر از 30 کاراکتر باشد"),
    email: yup
      .string()
      .required("لطفا یک ایمیل وارد کنید")
      .email("فرمت ایمیل اشتباه است"),
  })
  .required();

function CompleteProfile() {
  const resolver = useYupValidationResolver(schema);
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({ resolver, mode: "onTouched" });
  const { completeProfile } = useAuth();

  const submitHandler = async (values) => {
    await completeProfile(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <div>
          <TextField
            isRequired
            name="name"
            label="لطفا نام خود را وارد کنید"
            register={register}
            errors={errors}
            dir="rtl"
          />
          <TextField
            type="email"
            isRequired
            name="email"
            label="لطفا ایمیل خود را وارد کنید"
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

export default CompleteProfile;
