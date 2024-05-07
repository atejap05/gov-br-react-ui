import React from "react";

import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const listItemVariants = cva("br-item", {
  variants: {
    selected: {
      true: "selected",
    },
  },
});

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
  selected?: boolean;
  className?: string;
};

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, selected, className, ...props }: ListItemProps, ref) => {
    const classes = cn(listItemVariants({ selected }), className);
    return (
      <li ref={ref} className={classes} {...props}>
        <div className="row align-items-center">{children}</div>
      </li>
    );
  }
);
