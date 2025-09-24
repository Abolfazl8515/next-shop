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
import { addOneProductApi } from "@/services/productsService";
import { useYupValidationResolver } from "@/hooks/useYupValidationResolver";

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

function CreateProductForm({ postToEdit = {}, categories }) {
  const resolver = useYupValidationResolver(schema);
  const isEditSession = Boolean(postToEdit._id);
  let editValues = {};
  const { title, briefText, text, slug, readingTime, category, imageLink } =
    postToEdit;
  if (isEditSession) {
    editValues = {
      title,
      briefText,
      text,
      slug,
      readingTime,
      category: category?._id,
      imageLink,
    };
  }

  const {
    register,
    formState: { errors, isLoading },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: editValues,
    resolver,
    mode: "onTouched",
  });
  const router = useRouter();

  const onSubmit = async (data) => {
    const offPrice = data.price - data.discount;
    if (isEditSession) {
      editPost(
        { id: postToEdit._id, data: formData },
        {
          onSuccess: () => {
            router.push("/profile/posts");
          },
        }
      );
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
