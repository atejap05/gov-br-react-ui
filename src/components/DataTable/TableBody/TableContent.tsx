import type { TRows, TRow, TColumns, TColumn } from "../@types";
import { useDataTableContext } from "../context";

export type TableContentProps = {
  columns: TColumns;
  rows: TRows;
  selectedRows: TRows;
  onRowSelect: (row: TRow) => void;
};

// Displaying the table rows

const TableContent = ({
  rows,
  columns,
  selectedRows,
  onRowSelect,
}: TableContentProps) => {
  const { setShowSelecedBar } = useDataTableContext();

  const renderCell = (row: TRow, column: TColumn) => {
    if (column.render) {
      return column.render(row);
    }
    return row[column.field];
  };

  const setTdClassName = (row: TRow, column: TColumn) => {
    if (typeof column.className === "function") {
      return column.className(row);
    }
    return column.className;
  };

  return (
    <tbody>
      {rows.map((row, idx) => (
        <tr key={row[columns[0].field]}>
          <td>
            <div className="br-checkbox hidden-label">
              <input
                id={`check-line-${idx + 1}`}
                name={`check-line-${idx + 1}`}
                type="checkbox"
                aria-label={`Selecionar linha ${idx + 1}`}
                data-child={`check-${idx + 1}`}
                checked={selectedRows.includes(row)}
                onChange={e => {
                  onRowSelect(row);
                  setShowSelecedBar(e.target.checked);
                }}
              />
              <label htmlFor={`check-line-${idx + 1}`}>
                Selecionar linha {idx + 1}
              </label>
            </div>
          </td>
          {columns.map(column => (
            <td
              key={column.field}
              data-th={column.field}
              className={setTdClassName(row, column)}
            >
              {renderCell(row, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableContent.displayName = "TableContent";

export { TableContent };
