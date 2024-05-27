import "../../index.css";
import React from "react";
import { cva } from "class-variance-authority";
import { useCardContext } from "./context/card-context";

/////////// Card Content ///////////

const cardContentVariants = cva("card-content", {
  variants: {},
});

export type CardContentProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }: CardContentProps, ref) => {
    const isCard = useCardContext();

    if (!isCard) {
      throw new Error("CardContent must be a child of Card");
    }

    return (
      <div
        ref={ref}
        className={cardContentVariants({ className })}
        {...props}
      />
    );
  }
);
