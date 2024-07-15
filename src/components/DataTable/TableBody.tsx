import { THead } from "./THead";

export type TableBodyProps = {
  className?: string;
  title?: string;
  columns: Array<{ field: string; title: string }>;
  rows: Array<{ [key: string]: string | number }>;
};

const TableBody = ({ title, columns, rows }: TableBodyProps) => {
  return (
    <table>
      <caption>{title}</caption>
      <THead columns={columns} />
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
    </table>
  );
};

TableBody.displayName = "TableBody";

export { TableBody };
