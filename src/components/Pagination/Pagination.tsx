import "../../style.css";
import { cva } from "class-variance-authority";
import { PaginationContent } from "./PaginationContent";

const paginationVariants = cva("br-pagination", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
  },
});

export type PaginationProps = {
  size?: "sm" | "md" | "lg";
  numberOfPages: number;
  ellipsis: number;
  onChange?: (page: number) => void;
  defaultActivePage?: number;
  className?: string;
};

const Pagination = ({
  size = "lg",
  numberOfPages,
  ellipsis,
  defaultActivePage = 1,
  onChange,
  className,
}: PaginationProps) => {
  const classes = paginationVariants({ size, className });
  // raise an error if activePage is greater than numberOfPages
  if (defaultActivePage > numberOfPages) {
    throw new Error(
      `The active page is greater than the number of pages. Active page: ${defaultActivePage}, Number of pages: ${numberOfPages}`
    );
  }
  return (
    <nav
      className={classes}
      aria-label="paginação"
      data-total="5"
      data-current="1"
    >
      <PaginationContent
        numberOfPages={numberOfPages}
        ellipsis={ellipsis}
        activePage={defaultActivePage}
        onChange={onChange}
      />
    </nav>
  );
};

Pagination.displayName = "Pagination";

export { Pagination };
