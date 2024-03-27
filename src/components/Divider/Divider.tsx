import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils";

/////////// Divider Component ///////////

const dividerVariants = cva("text-xl", {
  variants: {
    orientation: {
      horizontal: "br-divider w-full",
      vertical: "br-divider vertical",
    },
    dashed: {
      true: " dashed",
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
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          dividerVariants({ orientation, size, dashed }),
          className
        )}
        {...props}
      />
    );
  }
);
