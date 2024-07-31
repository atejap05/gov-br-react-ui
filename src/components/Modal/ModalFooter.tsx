import React from "react";
import { cva } from "class-variance-authority";

const modalFooterVariants = cva("br-modal-footer", {
  variants: {
    aling: {
      left: "justify-content-start",
      center: "justify-content-center",
      right: "justify-content-end",
      around: "justify-content-around",
    },
  },
});

export type ModalFooterProps = {
  className?: string;
  children: React.ReactNode;
  aling?: "left" | "center" | "right" | "around";
};

const ModalFooter = ({
  children,
  aling = "center",
  className,
}: ModalFooterProps) => {
  const classes = modalFooterVariants({ aling, className });
  return <div className={classes}>{children}</div>;
};

ModalFooter.displayName = "ModalFooter";

export { ModalFooter };
