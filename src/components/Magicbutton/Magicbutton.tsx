import React, { forwardRef } from "react";
import "../../style.css";
import { cva } from "class-variance-authority";
import { Button } from "../Button";

import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

const magicbuttonVariants = cva("br-magic-button", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    position: {
      "top-left": "top-left",
      "top-right": "top-right",
      "bottom-left": "bottom-left",
      "bottom-right": "bottom-right",
      "center-left": "center-left",
      "center-right": "center-right",
      "center-bottom": "center-bottom",
      "center-top": "center-top",
    },
  },
});

export type MagicbuttonProps = React.HTMLAttributes<HTMLButtonElement> & {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  icon?: FontAwesomeIconProps["icon"];
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-left"
    | "center-right"
    | "center-bottom"
    | "center-top";
};

const Magicbutton = forwardRef<HTMLButtonElement, MagicbuttonProps>(
  (
    {
      className,
      label,
      size = "sm",
      position,
      icon,
      onClick,
      ...props
    }: MagicbuttonProps,
    ref
  ) => {
    const classes = magicbuttonVariants({ className, size, position });
    const circle = label ? false : true;
    return (
      <div className={classes}>
        <Button
          ref={ref}
          circle={circle}
          icon={icon}
          onClick={onClick}
          {...props}
        >
          <span className={icon && label ? "ml-1" : ""}>{label}</span>
        </Button>
      </div>
    );
  }
);

Magicbutton.displayName = "Magicbutton";

export { Magicbutton };
