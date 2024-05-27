import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import "../../index.css";

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

// TODO: feature: when checkbox is checked, add class selected

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, selected, className, ...props }: ListItemProps, ref) => {
    const classes = listItemVariants({ selected, className });
    return (
      <li ref={ref} className={classes} {...props}>
        <div className="row align-items-center">{children}</div>
      </li>
    );
  }
);
