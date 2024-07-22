import { TableHead } from "./TableHead";
import { TableContent } from "./TableContent";
import type { TColumns, TRows, TRow } from "../@types";
import { useDataTableContext } from "../context";

export type TableBodyProps = {
  tableTitle?: string;
  columns: TColumns;
  rows: TRows;
};

// Displaying the table body --> table head and table content

const TableBody = ({ tableTitle, columns, rows }: TableBodyProps) => {
  const { selectedRows, setSelectedRows } = useDataTableContext();

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedRows(rows);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (row: TRow) => {
    const index = selectedRows.findIndex(
      selectedRow => selectedRow.id === row.id
    );

    if (index === -1) {
      setSelectedRows([...selectedRows, row]);
    } else {
      setSelectedRows([
        ...selectedRows.slice(0, index),
        ...selectedRows.slice(index + 1),
      ]);
    }
  };

  return (
    <table>
      <TableHead
        columns={columns}
        tableTitle={tableTitle}
        onSelectAll={handleSelectAll}
        isAllSelected={selectedRows.length === rows.length}
        isIndeterminate={
          selectedRows.length > 0 && selectedRows.length < rows.length
        }
      />
      <TableContent
        rows={rows}
        columns={columns}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
      />
    </table>
  );
};

TableBody.displayName = "TableBody";

export { TableBody };
