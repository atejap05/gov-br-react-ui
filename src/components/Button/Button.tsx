import "../../style.css";
import React from "react";
import { cva } from "class-variance-authority";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

/////////// Button Component ///////////

const buttonVariants = cva("br-button", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
      tertiary: "",
      danger: "danger",
      success: "success",
      warning: "warning",
      info: "info",
    },
    size: {
      xs: "xsmall",
      sm: "small",
      md: "medium",
      lg: "large",
    },
    circle: {
      true: "circle",
      false: "",
    },

    active: {
      true: "active",
      false: "",
    },
    loading: {
      true: "loading",
      false: "",
    },
    dark: {
      true: "dark-mode",
      false: "",
    },
    block: {
      true: "block",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    circle: false,
    active: false,
    loading: false,
    dark: false,
    block: false,
  },
});

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "xs" | "sm" | "md" | "lg";
  circle?: boolean;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
  dark?: boolean;
  block?: boolean;
  icon?: FontAwesomeIconProps["icon"];
  type?: "button" | "submit" | "reset";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      circle,
      disabled,
      active,
      loading,
      dark,
      block,
      children,
      icon,
      type = "button",
      className,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={buttonVariants({
          variant,
          size,
          circle,
          active,
          loading,
          dark,
          block,
          className,
        })}
        {...props}
      >
        {icon ? (
          <div className="d-flex align-items-center justify-content-between gap-2">
            <FontAwesomeIcon icon={icon} />
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
