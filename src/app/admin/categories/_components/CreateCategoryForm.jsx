"use client";
import Button from "@/ui/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import TextField from "@/ui/TextField";
import { addCategoryApi, editCategoryApi } from "@/services/categoryService";
import { useState } from "react";
import Spinner from "@/ui/Loading";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";
import toast from "react-hot-toast";

const schema = yup
  .object({
    title: yup
      .string()
      .min(2, "حداقل 2 کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    description: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    englishTitle: yup
      .string()
      .min(2, "حداقل 2 کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm({ categoryToEdit = {} }) {
  const resolver = useYupValidationResolver(schema);
  const isEditSession = Boolean(categoryToEdit._id);
  const [isLoading, setIsLoading] = useState(false);
  let editValues = {};
  const { title, description, englishTitle } = categoryToEdit;
  if (isEditSession) {
    editValues = {
      title,
      description,
      englishTitle,
    };
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: editValues,
    resolver,
    mode: "onTouched",
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (isEditSession) {
      const editedData = { ...data, type: "product" };
      try {
        const { message } = await editCategoryApi({
          id: categoryToEdit._id,
          data: editedData,
        });
        toast.success(message);
        reset();
        router.push("/admin/categories");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    } else {
      try {
        const { message } = await addCategoryApi({ ...data, type: "product" });
        toast.success(message);
        reset();
        router.push("/admin/categories");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
    setIsLoading(false);
  };

  return (
    <form className="form mt-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        isRequired
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        isRequired
        errors={errors}
      />
      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        isRequired
        errors={errors}
      />

      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
