import { nanoid } from "nanoid";

type THeadProps = {
  columns: Array<{ field: string; title: string }>;
};

const THead = ({ columns }: THeadProps) => {
  const inputID = nanoid();

  return (
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
  );
};

THead.displayName = "THead";

export { THead };
