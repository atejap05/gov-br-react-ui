import "../../style.css";

export type ListItemTextProps = React.HTMLAttributes<HTMLDivElement> & {
  primary: string;
  secondary?: string;
};

export const ListItemText = ({ primary, secondary }: ListItemTextProps) => {
  return (
    <>
      <div className="col">{primary}</div>
      <div className="col-auto">{secondary}</div>
    </>
  );
};
