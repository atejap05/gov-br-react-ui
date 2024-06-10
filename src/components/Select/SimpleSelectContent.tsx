import { forwardRef, useState, useEffect, useRef } from "react";
import { useClickOutside } from "./hook/useClickOutside";

export type SimpleSelectContentProps = {
  onSelectChange: (value: string) => void;
  onClickOutside: (value: boolean) => void;
  defaultSelected?: string;
  options: {
    label: string;
    id: string;
  }[];
};

export const SimpleSelectContent = forwardRef<
  HTMLInputElement,
  SimpleSelectContentProps
>(
  (
    { onSelectChange, onClickOutside, options, defaultSelected, ...rest },
    ref
  ) => {
    const [selectedItem, setSelectedItem] = useState("");
    const brListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      onSelectChange(selectedItem);
    }, [selectedItem, onSelectChange]);

    useClickOutside({ onClickOutside, elementRef: brListRef });

    const isItemDefaultSelected = (option: { label: string; id: string }) => {
      if (defaultSelected) {
        return (
          option.id === defaultSelected || option.label === defaultSelected
        );
      }
      return false;
    };

    return (
      <div ref={brListRef} className="br-list d-block" tabIndex={0}>
        {options.map(option => (
          <div
            key={option.id}
            className={
              "br-item" +
              (isItemDefaultSelected(option) || selectedItem === option.label
                ? " selected"
                : "")
            }
            tabIndex={-1}
            aria-selected={isItemDefaultSelected(option)}
            onClick={() => setSelectedItem(option.label)}
          >
            <div className="br-radio">
              <input
                ref={ref}
                id={option.id}
                type="radio"
                value={option.label}
                defaultChecked={isItemDefaultSelected(option)}
                {...rest}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
