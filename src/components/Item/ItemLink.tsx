import React from "react";
import { cva } from "class-variance-authority";
import "../../style.css";
///// ItemLink Component /////

// TODO: Refatorar para reaproveitar os codigos de Item

const itemLinkVariants = cva("br-item", {
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

export type ItemLinkProps = React.AnchorHTMLAttributes<HTMLElement> & {
  img?: Img;
  href: string;
  target?: string;
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const ItemLink = ({
  id,
  img,
  href,
  target,
  disabled,
  selected,
  active,
  children,
  className,
}: ItemLinkProps) => {
  const classes = itemLinkVariants({ disabled, selected, active, className });

  return (
    <a
      id={id}
      href={href}
      target={target}
      className={classes}
      aria-disabled={disabled}
    >
      <div className="row align-items-center">
        {img && (
          <div className="col-auto">
            <img className={img.className} src={img.src} alt={img.alt} />
          </div>
        )}
        <div className="col">{children}</div>
      </div>
    </a>
  );
};
