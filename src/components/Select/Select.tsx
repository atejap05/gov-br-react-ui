// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style.css";
import React, { forwardRef, useState } from "react";
import { Button } from "../Button";
import { SelectInput } from "./SelectInput";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { SimpleSelectContent } from "./SimpleSelectContent";

// TODO: Options type! Precisa mesmo de todos esses campos?
// TODO: defaultSelect passar como propriedade do componente e nao do options

export type SelectProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onSelect?: (value: string) => void;
  options: {
    value: string;
    label: string;
    id: string;
    name: string;
    defaultSelected?: boolean;
  }[];
};

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ id, label, placeholder, options, value, onSelect, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    return (
      <div className="br-select">
        <SelectInput
          ref={ref}
          id={id}
          label={label}
          defaultValue={selectedItem || value}
          placeholder={placeholder}
          onChange={e => setSelectedItem(e.target.value)}
          {...props}
        >
          <Button
            aria-label="Exibir lista"
            tabIndex={-1}
            data-trigger="data-trigger"
            size="sm"
            variant={"tertiary"}
            circle
            icon={isOpen ? faAngleUp : faAngleDown}
            onClick={() => setIsOpen(!isOpen)}
          />
        </SelectInput>
        {isOpen && (
          <SimpleSelectContent
            onSelectChange={(value: string) => {
              setSelectedItem(value);
              onSelect && onSelect(value);
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
