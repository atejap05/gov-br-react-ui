import { useState, useEffect } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

export type DataTablePaginationProps = {
  pageSizeOptions: number[];
  totalRows: number;
  onPageSizeChange: (pageSize: number) => void;
  onCurrentPageChange: (currentPage: number) => void;
};

const DataTablePagination = ({
  pageSizeOptions,
  totalRows,
  onPageSizeChange,
  onCurrentPageChange,
}: DataTablePaginationProps) => {
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = Math.ceil(totalRows / pageSize);
  const firstRowOnCurrentPage = (currentPage - 1) * pageSize + 1;
  const lastRowOnCurrentPage = Math.min(currentPage * pageSize, totalRows);

  const inputExibirID = nanoid();
  const inputPaginaID = nanoid();

  useEffect(() => {
    onPageSizeChange && onPageSizeChange(pageSize);
  }, [pageSize, onPageSizeChange]);

  return (
    <div className="table-footer">
      <nav
        className="br-pagination"
        aria-label="paginação"
        data-total={String(totalRows)}
        data-current="1"
        data-per-page={String(pageSize)}
      >
        <div className="pagination-per-page">
          <Select
            id={inputExibirID}
            label="Exibir"
            options={pageSizeOptions.map(pageSizeOption => ({
              label: String(pageSizeOption),
              id: String(pageSizeOption),
            }))}
            value={String(pageSize)}
            onSelect={value => {
              if (value) setPageSize(Number(value));
            }}
          />
        </div>
        <span className="br-divider d-none d-sm-block mx-3"></span>
        <div className="pagination-information d-none d-sm-flex">
          <span className="current">{firstRowOnCurrentPage}</span>&ndash;
          <span className="per-page">{lastRowOnCurrentPage}</span>&nbsp;de&nbsp;
          <span className="total">{totalRows}</span>&nbsp;itens
        </div>
        <div className="pagination-go-to-page d-none d-sm-flex ml-auto">
          <Select
            id={inputPaginaID}
            label="Página"
            value={String(currentPage)}
            options={
              Array.from({ length: numOfPages }, (_, i) => ({
                label: String(i + 1),
                id: String(i + 1),
              })) || []
            }
            onSelect={value => {
              if (value) {
                setCurrentPage(Number(value));
                onCurrentPageChange && onCurrentPageChange(Number(value));
              }
            }}
          />
        </div>
        <span className="br-divider d-none d-sm-block mx-3"></span>
        <div className="pagination-arrows ml-auto ml-sm-0">
          <Button
            variant="tertiary"
            circle
            aria-label="Voltar página"
            icon={faAngleLeft}
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                onCurrentPageChange && onCurrentPageChange(currentPage - 1);
              }
            }}
          />
          <Button
            variant="tertiary"
            circle
            aria-label="Página seguinte"
            icon={faAngleRight}
            onClick={() => {
              if (currentPage < numOfPages) {
                setCurrentPage(currentPage + 1);
                onCurrentPageChange && onCurrentPageChange(currentPage + 1);
              }
            }}
          />
        </div>
      </nav>
    </div>
  );
};

DataTablePagination.displayName = "DataTablePagination";

export { DataTablePagination };
