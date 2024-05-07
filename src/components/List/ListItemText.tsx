export type ListItemTextProps = React.HTMLAttributes<HTMLDivElement> & {
  primary: string;
  secondary?: string;
};

// TODO: Mover checkbox para componente separado. ListItemCheckbox

export const ListItemText = ({ primary, secondary }: ListItemTextProps) => {
  return (
    <>
      <div className="col">{primary}</div>
      <div className="col-auto">{secondary}</div>
    </>
  );
};
