import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
const paginationItemVariants = cva("page", {
  variants: {
    active: {
      true: "active",
      false: "",
    },
  },
});

export type PaginationItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  active: boolean;
  page: number;
  onClick?: () => void;
};

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ active, page, onClick }: PaginationItemProps, ref) => {
    const classes = paginationItemVariants({ active });
    return (
      <li className="cursor-pointer" ref={ref} onClick={onClick}>
        <a className={classes} aria-label={`Página ${page}`}>
          {page}
        </a>
      </li>
    );
  }
);

PaginationItem.displayName = "PaginationItem";

export { PaginationItem };
