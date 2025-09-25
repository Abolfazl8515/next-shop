"use client";
import Button from "@/ui/Button";
import Select from "@/ui/Select";
import TextArea from "@/ui/TextArea";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import toast from "react-hot-toast";
import Spinner from "@/ui/Loading";
import {
  addOneProductApi,
  updateOneProductApi,
} from "@/services/productsService";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";
import { useState } from "react";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    description: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    price: yup
      .number()
      .positive()
      .integer()
      .required(" قیمت ضروری است")
      .typeError("یک عدد را وارد کنید"),
    imageLink: yup.string().required("لینک عکس ضروری است"),
    countInStock: yup
      .number()
      .positive()
      .integer()
      .required(" موجودی ضروری است")
      .typeError("یک عدد را وارد کنید"),
    discount: yup.number().positive(),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreateProductForm({ productToEdit = {}, categories }) {
  const [isLoading, setIsLoading] = useState(false);
  const resolver = useYupValidationResolver(schema);
  const isEditSession = Boolean(productToEdit._id);
  let editValues = {};
  const {
    title,
    description,
    price,
    discount,
    countInStock,
    slug,
    category,
    imageLink,
  } = productToEdit;
  if (isEditSession) {
    editValues = {
      title,
      description,
      price,
      discount,
      countInStock,
      slug,
      category: category?._id,
      imageLink,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValues,
    resolver,
    mode: "onTouched",
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    setIsLoading(true);
    const discountCalc = (data.price * data.discount) / 100;
    const offPrice = data.price - discountCalc;
    if (isEditSession) {
      const editedData = { ...data, offPrice };
      try {
        const { message } = await updateOneProductApi({
          id: productToEdit._id,
          data: editedData,
        });
        toast.success(message);
        reset();
        router.push("/admin/products");
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    } else {
      try {
        const { message } = await addOneProductApi({
          ...data,
          offPrice,
          brand: "apple",
        });
        toast.success(message);
        reset();
        router.push("/admin/products");
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
      <TextArea
        label="توضیحات محصول"
        name="description"
        register={register}
        isRequired
        errors={errors}
      />
      <TextField
        label="اسلاگ"
        name="slug"
        register={register}
        isRequired
        errors={errors}
      />
      <TextField
        label="قیمت (تومان)"
        name="price"
        register={register}
        isRequired
        errors={errors}
        type="number"
      />
      <TextField
        label="تخفیف (درصد)"
        name="discount"
        register={register}
        errors={errors}
        type="number"
      />
      <TextField
        label="موحودی انبار"
        name="countInStock"
        register={register}
        isRequired
        errors={errors}
        type="number"
      />
      <TextField
        label="لینک عکس محصول"
        name="imageLink"
        register={register}
        isRequired
        errors={errors}
      />
      <Select
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
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

export default CreateProductForm;
