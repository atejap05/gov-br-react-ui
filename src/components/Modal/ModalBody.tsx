import React from "react";
import { cva } from "class-variance-authority";

const modalBodyVariants = cva("br-modal-body");

export type ModalBodyProps = {
  className?: string;
  children: React.ReactNode;
};

const ModalBody = ({ children, className }: ModalBodyProps) => {
  const classes = modalBodyVariants({ className });

  return <div className={classes}>{children}</div>;
};

ModalBody.displayName = "ModalBody";

export { ModalBody };
