import "../../style.css";
import React, { forwardRef, useState } from "react";
import { Button } from "../Button";
import { SelectInput } from "./SelectInput";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { SelectContent } from "./SelectContent";

export type SelectProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  allowMultiSelect?: boolean;
  onSelect?: (listItems: TSelectedItems | string) => void;
  options: {
    label: string;
    id: string;
  }[];
};

type TSelectedItems = string[];

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    { id, label, placeholder, options, onSelect, allowMultiSelect, ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    return (
      <div className="br-select">
        <SelectInput
          ref={ref}
          id={id}
          label={label}
          value={selectedItem}
          placeholder={placeholder}
          onChange={e => setSelectedItem(e.target.value)}
          {...props}
        >
          <Button
            aria-label="Exibir lista"
            data-trigger="data-trigger"
            size="sm"
            variant={"tertiary"}
            circle
            icon={isOpen ? faAngleUp : faAngleDown}
            onClick={() => setIsOpen(!isOpen)}
          />
        </SelectInput>
        {isOpen && (
          <SelectContent
            allowMultiSelect={allowMultiSelect}
            onSelectChange={(listItem: TSelectedItems) => {
              setSelectedItem(listItem.join(", "));
              onSelect && onSelect(allowMultiSelect ? listItem : listItem[0]);
            }}
            onClickOutside={(value: boolean) => {
              setIsOpen(value);
            }}
            options={options}
            {...props}
          />
        )}
      </div>
    );
  }
);
