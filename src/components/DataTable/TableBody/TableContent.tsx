import type { TRows, TRow, TColumns } from "../@types";
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
  return (
    <tbody>
      {rows.map((row, idx) => (
        <tr key={row.id}>
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
                  console.log(row);
                }}
              />
              <label htmlFor={`check-line-${idx + 1}`}>
                Selecionar linha {row.id}
              </label>
            </div>
          </td>
          {columns.map(column => (
            <td key={column.field} data-th={column.field}>
              {row[column.field]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableContent.displayName = "TableContent";

export { TableContent };
