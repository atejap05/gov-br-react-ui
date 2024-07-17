import { nanoid } from "nanoid";

type TableHeadProps = {
  columns: Array<{ field: string; title: string }>;
  tableTitle?: string;
};

// Displaying the table head --> columns and a checkbox to select all rows

const TableHead = ({ columns, tableTitle }: TableHeadProps) => {
  const inputID = nanoid();

  return (
    <>
      <caption>{tableTitle}</caption>
      <thead>
        <tr>
          <th className="column-checkbox" scope="col">
            <div className="br-checkbox hidden-label">
              <input
                id={`check-all-${inputID}`}
                name={`check-all-${inputID}`}
                type="checkbox"
                aria-label="Selecionar tudo"
                data-parent={`check-01-${2684}`}
              />
              <label htmlFor={`check-all-${inputID}`}>
                Selecionar todas as linhas
              </label>
            </div>
          </th>
          {columns.map(column => (
            <th key={column.field} scope="col" id={column.field}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

TableHead.displayName = "TableHead";

export { TableHead };
