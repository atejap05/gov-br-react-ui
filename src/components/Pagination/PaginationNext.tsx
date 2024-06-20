import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export type PaginationNextProps = React.LiHTMLAttributes<HTMLLIElement> & {
  onClick: () => void;
};

const PaginationNext = React.forwardRef<HTMLLIElement, PaginationNextProps>(
  ({ onClick }: PaginationNextProps, ref) => {
    return (
      <li ref={ref}>
        <Button
          circle
          variant="tertiary"
          data-previous-page="data-previous-page"
          aria-label="Voltar página"
          icon={faAngleRight}
          onClick={onClick}
        />
      </li>
    );
  }
);

PaginationNext.displayName = "PaginationNext";

export { PaginationNext };
