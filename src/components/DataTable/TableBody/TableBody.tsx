import { TableHead } from "./TableHead";
import { TableContent } from "./TableContent";

export type TableBodyProps = {
  tableTitle?: string;
  columns: Array<{ field: string; title: string }>;
  rows: Array<{ [key: string]: string | number }>;
};

// Displaying the table body --> table head and table content

const TableBody = ({ tableTitle, columns, rows }: TableBodyProps) => {
  return (
    <table>
      <TableHead columns={columns} tableTitle={tableTitle} />
      <TableContent rows={rows} columns={columns} />
    </table>
  );
};

TableBody.displayName = "TableBody";

export { TableBody };
