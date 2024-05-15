import React from "react";
import { ListTitle } from "./ListTitle";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import "../../index.css";

const listVariants = cva("br-list w-full p-0 m-0", {
  variants: {
    orientation: {
      vertical: "",
      horizontal: "horizontal",
    },
    density: {
      default: "",
      medium: "[&>li]:py-3",
      low: "[&>li]:py-4",
    },
  },
});

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  orientation?: "vertical" | "horizontal";
  density?: "default" | "medium" | "low";
  className?: string;
  children: React.ReactNode;
  header?: string | { title: string; className?: string };
};

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  (
    {
      orientation = "vertical",
      density = "default",
      header,
      className,
      children,
      ...props
    }: ListProps,
    ref
  ) => {
    if (typeof header === "string") {
      header = { title: header };
    }

    return (
      <ul
        ref={ref}
        className={cn(listVariants({ orientation, density }), className)}
        {...props}
      >
        {header && (
          <ListTitle title={header.title} className={header.className} />
        )}
        {children}
      </ul>
    );
  }
);
