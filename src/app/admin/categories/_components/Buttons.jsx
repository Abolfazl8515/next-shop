"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useActionState, useEffect, useState } from "react";
import ConfirmDelete from "@/ui/ConfirmDelete";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import deleteCategory from "../_actions/deleteCategory";

export function UpdateBtn({ category }) {
  return (
    <Link href={`/admin/categories/${category._id}/edit`}>
      <ButtonIcon variant="primary" className="cursor-pointer">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function DeleteBtn({ category }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deleteCategory, {
    message: "",
    error: "",
  });
  const router = useRouter();

  const confirmHandler = (formData) => {
    formAction({ formData, categoryId: category._id });
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      router.refresh();
      setOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="حذف دسته بندی"
        description={`حذف دسته بندی ${category.title}`}
      >
        <ConfirmDelete
          onClose={() => setOpen(false)}
          onConfirm={confirmHandler}
          resourceName={`دسته بندی ${category.title}`}
        />
      </Modal>
      <ButtonIcon
        variant="red"
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <TrashIcon />
      </ButtonIcon>
    </>
  );
}
