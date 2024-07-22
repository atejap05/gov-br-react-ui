import "../../style.css";
import { useState } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TablePagination } from "./TableFooter/TablePagination";
import { TableBody } from "./TableBody/TableBody";
import { DataTableContextProvider } from "./context";
import { useDataTable } from "./useDataTable";
import { cva } from "class-variance-authority";
import type { TAction, TRows, TColumns, TDensity } from "./@types";

const DataTableVariants = cva("br-table", {
  variants: {
    density: {
      small: "small",
      medium: "medium",
      large: "large",
    },
  },
});

export type DataTableProps = {
  className?: string;
  title?: string;
  pageSizeOptions?: number[];
  columns: TColumns;
  rows: TRows;
  actions?: TAction[];
  density?: TDensity;
};

const DataTable = ({
  className,
  title,
  pageSizeOptions,
  columns,
  rows,
  actions,
}: DataTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tablePageSize, setTablePageSize] = useState(pageSizeOptions?.[0] || 5);

  const {
    showSelecedBar,
    setShowSelecedBar,
    searchedValue,
    setSearchedValue,
    density,
    setDensity,
    selectedRows,
    setSelectedRows,
  } = useDataTable();

  const rowsToShow = rows.slice(
    (currentPage - 1) * tablePageSize,
    currentPage * tablePageSize
  );

  const searchedRows = rowsToShow.filter(row => {
    return Object.values(row).some(value => {
      return String(value).toLowerCase().includes(searchedValue.toLowerCase());
    });
  });

  const classes = DataTableVariants({ density, className });

  return (
    <DataTableContextProvider
      value={{
        density: density,
        setDensity: setDensity,
        searchedValue: searchedValue,
        setSearchedValue: setSearchedValue,
        showSelecedBar: showSelecedBar,
        setShowSelecedBar: setShowSelecedBar,
        selectedRows: selectedRows,
        setSelectedRows: setSelectedRows,
        actions: actions,
      }}
    >
      <div
        className={classes}
        data-search="data-search"
        data-selection="data-selection"
        data-collapse="data-collapse"
        data-random="data-random"
      >
        <TableHeader tableTitle={title} />
        <TableBody tableTitle={title} columns={columns} rows={searchedRows} />

        {pageSizeOptions && (
          <TablePagination
            pageSizeOptions={pageSizeOptions}
            totalRows={rows.length}
            onPageSizeChange={pageSize => {
              if (pageSize) setTablePageSize(pageSize);
            }}
            onCurrentPageChange={currentPage => {
              if (currentPage) setCurrentPage(currentPage);
            }}
          />
        )}
      </div>
    </DataTableContextProvider>
  );
};

DataTable.displayName = "Table";

export { DataTable };

/**
 * 
 const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


<DataGrid
  rows={rows}
  columns={columns}
  initialState={{
    pagination: {
      paginationModel: { page: 0, pageSize: 5 },
    },
  }}
  pageSizeOptions={[5, 10]}
  checkboxSelection
/>

 */
