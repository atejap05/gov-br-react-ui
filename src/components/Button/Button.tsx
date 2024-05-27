import "../../style.css";
import React from "react";
import { cva } from "class-variance-authority";

/////////// Button Component ///////////

// TODO: Verificar necessidade de implementacao da class .inverted and .dark-mode

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
        {children}
      </button>
    );
  }
);
