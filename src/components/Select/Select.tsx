import "../../style.css";
import React, { forwardRef, useState } from "react";
import { Button } from "../Button";
import { SelectInput } from "./SelectInput";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { SelectContent, type TOptions } from "./SelectContent";

// Refatorar para onSelect retornar um array de objetos tipo {label: string, id: string}[]

export type SelectProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  allowMultiSelect?: boolean;
  onSelect?: (listItems: TOptions) => void;
  options: TOptions;
};

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    { id, label, placeholder, options, onSelect, allowMultiSelect, ...props },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<TOptions>([]);

    return (
      <div className="br-select">
        <SelectInput
          ref={ref}
          id={id}
          label={label}
          value={selectedItem.map(item => item.label).join(", ")}
          placeholder={placeholder}
          onChange={e =>
            setSelectedItem([{ label: e.target.value, id: e.target.value }])
          }
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
            onSelectChange={(listItem: TOptions) => {
              setSelectedItem(listItem);
              onSelect && onSelect(listItem);
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
