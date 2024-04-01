import React from "react";
import { cn } from "../../utils";
import { cva } from "class-variance-authority";
import { useCardContext } from "./context/card-context";

/////////// Card Header ///////////

const cardHeaderVariants = cva("card-header", {
  variants: {},
});

export type CardHeaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

// TODO: CardHeader so pode ser filho de Card

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }: CardHeaderProps, ref) => {
    const isCard = useCardContext();

    if (!isCard) {
      throw new Error("CardHeader must be a child of Card");
    }

    return (
      <div
        ref={ref}
        className={cn(cardHeaderVariants({}), className)}
        {...props}
      />
    );
  }
);
