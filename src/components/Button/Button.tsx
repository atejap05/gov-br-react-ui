import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

// TODO: Loading component should be moved to a separate file
// TODO: Provavelmente o Loading css vem do design system, verificar se é necessário manter o css

const Loading = () => (
  <div className="absolute inline-flex items-center">
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]" />
  </div>
);

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
    disabled: {
      true: "disabled cursor-not-allowed",
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
    darkMode: {
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
    disabled: false,
    active: false,
    loading: false,
    darkMode: false,
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
  darkMode?: boolean;
  block?: boolean;
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
      darkMode,
      block,
      children,
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
            darkMode,
            block,
          }),
          className
        )}
        {...props}
      >
        {loading ? <Loading /> : null}
        <span
          className={cn("transition", {
            "opacity-0": loading,
            "opacity-100": !loading,
          })}
        >
          {children}
        </span>
      </button>
    );
  }
);
