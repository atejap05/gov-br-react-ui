import "../../style.css";
import { cva } from "class-variance-authority";
import React from "react";

/////////// Divider Component ///////////

const dividerVariants = cva("br-divider", {
  variants: {
    orientation: {
      horizontal: "w-full",
      vertical: "vertical",
    },
    dashed: {
      true: "dashed",
      false: "",
    },
    size: {
      sm: "sm",
      md: "md",
      lg: "lg",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    size: "md",
  },
});

export type DividerProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  dashed?: boolean;
};

export const Divider = React.forwardRef<HTMLSpanElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      size = "md",
      dashed = false,
      className,
      ...props
    }: DividerProps,
    ref
  ) => {
    const classes = dividerVariants({ orientation, size, dashed, className });

    return <span ref={ref} className={classes} {...props} />;
  }
);
