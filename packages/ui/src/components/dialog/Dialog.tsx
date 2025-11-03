"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import styles from "./Dialog.module.css";

interface DialogProps {
  children: ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
  trigger?: ReactNode;
}

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
export const DialogPortal = Dialog.Portal;
export const DialogOverlay = Dialog.Overlay;
export const DialogContent = Dialog.Content;
export const DialogTitle = Dialog.Title;
export const DialogDescription = Dialog.Description;
export const DialogClose = Dialog.Close;

export const CustomDialog = ({
  children,
  open,
  onOpenChange,
  title,
  description,
  trigger,
}: DialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content}>
          {title && (
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          )}

          {description && (
            <Dialog.Description className={styles.description}>
              {description}
            </Dialog.Description>
          )}

          <div className={styles.body}>{children}</div>

          <Dialog.Close className={styles.closeButton}>×</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
