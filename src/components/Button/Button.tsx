import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

/////////// Button Component ///////////

// TODO: Verificar necessidade de implementacao da class .inverted and .dark-mode

const buttonVariants = cva("br-button", {
  variants: {
    variant: {
      primary: "primary",
      secondary: "secondary",
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
    disabled: {
      true: "disabled",
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
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    circle: false,
    disabled: false,
    active: false,
    loading: false,
  },
});

export type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  circle?: boolean;
  disabled?: boolean;
  active?: boolean;
  loading?: boolean;
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

      className,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            circle,
            disabled,
            active,
            loading,
          }),
          className
        )}
        {...props}
      />
    );
  }
);
