import "../../style.css";
import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { CardProvider } from "./context/card-context";

/////////// Main Card Component ///////////

const cardVariants = cva("br-card", {
  variants: {
    disabled: {
      true: "disabled",
      false: "",
    },
    hover: {
      true: "hover",
      false: "",
    },
    fixed: {
      true: "h-fixed",
      false: "",
    },
  },
});

export type CardProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  hover?: boolean;
  fixed?: boolean;
  children: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      disabled = false,
      hover = false,
      fixed = false,
      className,
      ...props
    }: CardProps,
    ref
  ) => {
    const [isCard] = useState(true);
    const classes = cardVariants({ disabled, hover, fixed, className });
    return (
      <CardProvider value={isCard}>
        <div ref={ref} className={classes} {...props} />
      </CardProvider>
    );
  }
);
