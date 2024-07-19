import { nanoid } from "nanoid";
import { useDataTableContext } from "../context";
import { TColumns } from "../@types";

type TableHeadProps = {
  columns: TColumns;
  tableTitle?: string;
  isAllSelected: boolean;
  isIndeterminate: boolean;
  onSelectAll: (isChecked: boolean) => void;
};

// Displaying the table head --> columns and a checkbox to select all rows

const TableHead = ({
  columns,
  tableTitle,
  isAllSelected,
  isIndeterminate,
  onSelectAll,
}: TableHeadProps) => {
  const inputID = nanoid();
  const { setShowSelecedBar } = useDataTableContext();

  return (
    <>
      <caption>{tableTitle}</caption>
      <thead>
        <tr>
          <th className="column-checkbox" scope="col">
            <div className="br-checkbox hidden-label">
              <input
                ref={input => {
                  if (input) {
                    input.indeterminate = isIndeterminate;
                  }
                }}
                id={`check-all-${inputID}`}
                name={`check-all-${inputID}`}
                type="checkbox"
                aria-label="Selecionar tudo"
                data-parent={`check-01-${2684}`}
                checked={isAllSelected}
                onChange={e => {
                  setShowSelecedBar(e.target.checked);
                  onSelectAll(e.target.checked);
                }}
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
