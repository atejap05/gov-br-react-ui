// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style.css";
import React, { forwardRef, useState, useEffect } from "react";
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
  defaultSelected?: string;
  options: {
    label: string;
    id: string;
  }[];
};

type TSelectedItems = string[];

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      id,
      label,
      placeholder,
      options,
      defaultSelected,
      onSelect,
      allowMultiSelect,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");

    useEffect(() => {
      if (defaultSelected) {
        const option = options.find(
          option =>
            option.id === defaultSelected || option.label === defaultSelected
        );
        if (option) {
          setSelectedItem(option.label);
        }
      }
    }, [defaultSelected, options]);
    return (
      <div className="br-select">
        <SelectInput
          ref={ref}
          id={id}
          label={label}
          defaultValue={selectedItem}
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
