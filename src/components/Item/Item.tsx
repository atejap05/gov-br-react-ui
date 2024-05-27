import "../../index.css";
import React from "react";
import { cva } from "class-variance-authority";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

///// Item Component /////

const itemVariants = cva("br-item", {
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

type Action = {
  icon: FontAwesomeIconProps["icon"];
  className?: string;
  action?: () => void;
};

export type ItemProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  img?: Img;
  action?: Action;
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const Item = ({
  id,
  action,
  img,
  active,
  disabled,
  selected,
  children,
  className,
}: ItemProps) => {
  const classes = itemVariants({ disabled, selected, active, className });

  return (
    <div id={id} className={classes} aria-disabled={disabled}>
      <div className="row align-items-center">
        {img && (
          <div className="col-auto">
            <img className={img.className} src={img.src} alt={img.alt} />
          </div>
        )}
        <div className="col">{children}</div>
        {action && (
          <div className="col-auto">
            <Button
              className={action.className}
              circle
              variant="tertiary"
              disabled={disabled}
              onClick={action.action}
            >
              <FontAwesomeIcon icon={action.icon} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
