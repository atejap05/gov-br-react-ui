import { useState } from "react";
import { Button } from "../Button";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

export type PaginationEllipsisProps = {
  numberOfPages: number;
  startWith: number;
  onClick: (page: number) => void;
};

const PaginationEllipsis = ({
  numberOfPages,
  startWith,
  onClick,
}: PaginationEllipsisProps) => {
  const [hiddenList, setHiddenList] = useState(true);

  const pageNumbers = Array.from(
    { length: numberOfPages },
    (_, index) => index + startWith
  );

  return (
    <li className="pagination-ellipsis">
      <Button
        circle
        variant="tertiary"
        data-toggle="dropdown"
        aria-label="Abrir ou fechar a lista de paginação"
        icon={faEllipsisH}
        onClick={() => setHiddenList(!hiddenList)}
      />

      <div className="br-list" hidden={hiddenList} role="menu">
        {pageNumbers.slice(0).map((pageNumber, index) => (
          <a
            key={index}
            className={"br-item"}
            aria-label={`Página ${pageNumber}`}
            role="menuitem"
            onClick={e => {
              e.preventDefault();
              onClick(pageNumber);
            }}
          >
            {pageNumber}
          </a>
        ))}
      </div>
    </li>
  );
};

PaginationEllipsis.displayName = "PaginationEllipsis";

export { PaginationEllipsis };
