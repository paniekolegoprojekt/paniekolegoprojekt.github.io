import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
  trigger?: React.ReactNode;
  content?: React.ReactNode;
};

const Modal = ({ trigger, content }: ModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">{content}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
