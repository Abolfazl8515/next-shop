"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import deleteProduct from "../_actions/deleteProduct";
import Modal from "@/ui/Modal";
import ConfirmDelete from "@/ui/ConfirmDelete";
import toast from "react-hot-toast";

export function UpdateButton({ id }) {
  return (
    <Link href={`/admin/products/${id}/edit`}>
      <ButtonIcon variant="primary" className="cursor-pointer">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export default UpdateButton;

const initialState = {
  message: "",
  error: "",
};

export function DeleteButton({ id: postId, productTitle }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deleteProduct, initialState);
  const router = useRouter();

  const deleteHandler = async (formData) => {
    await formAction({ formData, postId });
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      router.refresh();
      setOpen(false);
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state, router]);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title={`حذف ${productTitle}`}
      >
        <ConfirmDelete
          onClose={() => setOpen(false)}
          onConfirm={deleteHandler}
          resourceName={productTitle}
        />
      </Modal>
      <ButtonIcon variant="red" className="cursor-pointer" onClick={() => setOpen(true)}>
        <TrashIcon />
      </ButtonIcon>
    </>
  );
}
