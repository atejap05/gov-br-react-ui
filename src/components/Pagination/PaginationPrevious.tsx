import React from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

export type PaginationPreviousProps = React.LiHTMLAttributes<HTMLLIElement> & {
  onClick: () => void;
};

const PaginationPrevious = React.forwardRef<
  HTMLLIElement,
  PaginationPreviousProps
>(({ onClick }: PaginationPreviousProps, ref) => {
  return (
    <li ref={ref}>
      <Button
        circle
        variant="tertiary"
        data-previous-page="data-previous-page"
        aria-label="Voltar página"
        icon={faAngleLeft}
        onClick={onClick}
      />
    </li>
  );
});

PaginationPrevious.displayName = "PaginationPrevious";

export { PaginationPrevious };
