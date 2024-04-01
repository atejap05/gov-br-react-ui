import React from "react";
import { cn } from "../../utils";
import { cva } from "class-variance-authority";
import { useCardContext } from "./context/card-context";

/////////// Card Footer ///////////

const cardFooterVariants = cva("card-footer", {
  variants: {},
});

export type CardFooterProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

// TODO: CardFooter so pode ser filho de Card

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }: CardFooterProps, ref) => {
    const isCard = useCardContext();

    if (!isCard) {
      throw new Error("CardFooter must be a child of Card");
    }
    return (
      <div
        ref={ref}
        className={cn(cardFooterVariants({}), className)}
        {...props}
      />
    );
  }
);
