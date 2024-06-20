import { useState } from "react";
import { PaginationPrevious } from "./PaginationPrevious";
import { PaginationNext } from "./PaginationNext";
import { PaginationItem } from "./PaginationItem";
import { PaginationEllipsis } from "./PaginationEllipsis";
import { useEllipsisSlice } from "./useEllipsisSlice";

export type PaginationContentProps = {
  numberOfPages: number;
  ellipsis: number;
  activePage: number;
  onChange?: (page: number) => void;
};

const PaginationContent = ({
  numberOfPages,
  ellipsis,
  activePage = 1,
  onChange,
}: PaginationContentProps) => {
  const [actualActivePage, setActualActivePage] = useState<number>(activePage);

  const onClickPreviousHandler = () => {
    if (actualActivePage > 1) {
      setActualActivePage(actualActivePage - 1);
      onChange && onChange(actualActivePage - 1);
    }
  };

  const onClickNextHandler = () => {
    if (actualActivePage < numberOfPages) {
      setActualActivePage(actualActivePage + 1);
      onChange && onChange(actualActivePage + 1);
    }
  };

  const [firstEllipsis, secondEllipsis, restItems] = useEllipsisSlice(
    numberOfPages,
    ellipsis
  );

  const randerContent = (ellipsis: number) => {
    if (ellipsis === 0) {
      return [...Array(numberOfPages).keys()].map(pageNumber => {
        return (
          <PaginationItem
            key={pageNumber}
            page={pageNumber + 1}
            active={actualActivePage === pageNumber}
            onClick={() => {
              setActualActivePage(pageNumber);
              onChange && onChange(pageNumber);
            }}
          />
        );
      });
    } else {
      return restItems.map((pageNumber, index) => {
        if (index === 1) {
          return (
            <PaginationEllipsis
              key={pageNumber}
              numberOfPages={firstEllipsis.length + 1}
              startWith={firstEllipsis[0]}
              onClick={ellipsisPageValue => {
                setActualActivePage(ellipsisPageValue);
                onChange && onChange(ellipsisPageValue);
              }}
            />
          );
        } else if (index === restItems.length - 2) {
          return (
            <PaginationEllipsis
              key={pageNumber}
              numberOfPages={secondEllipsis.length + 1}
              startWith={secondEllipsis[0] - 1}
              onClick={ellipsisPageValue => {
                setActualActivePage(ellipsisPageValue);
                onChange && onChange(ellipsisPageValue);
              }}
            />
          );
        } else {
          return (
            <PaginationItem
              key={pageNumber}
              page={pageNumber}
              active={actualActivePage === pageNumber}
              onClick={() => {
                setActualActivePage(pageNumber);
                onChange && onChange(pageNumber);
              }}
            />
          );
        }
      });
    }
  };

  return (
    <ul>
      <PaginationPrevious onClick={onClickPreviousHandler} />
      {randerContent(ellipsis)}
      <PaginationNext onClick={onClickNextHandler} />
    </ul>
  );
};

PaginationContent.displayName = "PaginationContent";

export { PaginationContent };
