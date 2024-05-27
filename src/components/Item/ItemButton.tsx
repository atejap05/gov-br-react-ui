import React from "react";
import { cva } from "class-variance-authority";
import "../../index.css";
///// ItemButton Component /////

// TODO: Refatorar para reaproveitar os codigos de Item

const itemButtonVariants = cva("br-item", {
  variants: {
    disabled: {
      true: "disabled",
      false: "",
    },
    selected: {
      true: "selected",
      false: "",
    },
    active: {
      true: "active",
      false: "",
    },
  },
});

type Img = {
  src: string;
  alt: string;
  className?: string;
};

export type ItemLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  img?: Img;
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
};

export const ItemButton = ({
  id,
  img,
  disabled,
  selected,
  active,
  children,
  onClick,
  className,
}: ItemLinkProps) => {
  const classes = itemButtonVariants({ disabled, selected, active, className });

  return (
    <button
      id={id}
      className={classes}
      aria-disabled={disabled}
      onClick={onClick}
    >
      <div className="row align-items-center">
        {img && (
          <div className="col-auto">
            <img className={img.className} src={img.src} alt={img.alt} />
          </div>
        )}
        <div className="col">{children}</div>
      </div>
    </button>
  );
};
