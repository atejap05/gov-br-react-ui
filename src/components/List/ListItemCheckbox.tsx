import { Checkbox, CheckboxProps } from "../Checkbox";
import "@/styles/index.css";

export type ListItemCheckboxProps = CheckboxProps & {
  label?: string;
  labeled?: boolean;
};

export const ListItemCheckbox = ({
  id,
  name,
  label,
  labeled = false,
  ...props
}: ListItemCheckboxProps) => {
  return (
    <Checkbox id={id} name={name} label={label} labeled={labeled} {...props} />
  );
};
