import "../../style.css";
import React, { useState, useEffect, useRef } from "react";
import { ModalHeader } from "./ModalHeader";
import { cva } from "class-variance-authority";
import { useClickOutside } from "@/hooks/useClickOutside";

const modalVariants = cva("br-modal", {
  variants: {
    compact: {
      true: "small",
      false: "medium",
    },
  },
});

export type ModalProps = {
  className?: string;
  active: boolean;
  title: string;
  subtitle?: string;
  compact?: boolean;
  children?: React.ReactNode;
};

const Modal = ({
  className,
  active,
  title,
  subtitle,
  compact = false,
  children,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useClickOutside({
    onClickOutside: () => setIsActive(false),
    elementRef: modalRef,
  });

  useEffect(() => {
    setIsActive(active);

    return () => {
      setIsActive(false);
    };
  }, [active]);

  const scrimClasses = isActive ? "br-scrim foco active" : "br-scrim foco";
  const modalClasses = modalVariants({ compact, className });

  return (
    <div className={scrimClasses} data-trigger="scrim">
      <div ref={modalRef} className={modalClasses}>
        <div className="br-modal-dialog">
          <div className="br-modal-content">
            <ModalHeader
              title={title}
              subtitle={subtitle}
              onClose={(close: boolean) => {
                setIsActive(!close);
              }}
            ></ModalHeader>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.displayName = "Modal";

export { Modal };
