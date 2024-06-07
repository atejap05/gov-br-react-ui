import { forwardRef, useState, useEffect, useRef } from "react";
import { useClickOutside } from "./hook/useClickOutside";

export type SimpleSelectContentProps = {
  onSelectChange: (value: string) => void;
  onClickOutside: (value: boolean) => void;
  options: {
    value: string;
    label: string;
    id: string;
    name: string;
    defaultSelected?: boolean;
  }[];
};

export const SimpleSelectContent = forwardRef<
  HTMLInputElement,
  SimpleSelectContentProps
>(({ onSelectChange, onClickOutside, options, ...rest }, ref) => {
  const [selectedItem, setSelectedItem] = useState("");
  const brListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onSelectChange(selectedItem);
  }, [selectedItem, onSelectChange]);

  useClickOutside({ onClickOutside, elementRef: brListRef });

  return (
    <div ref={brListRef} className="br-list d-block" tabIndex={0}>
      {options.map(option => (
        <div
          key={option.id}
          className={
            "br-item" +
            (option.defaultSelected || selectedItem === option.label
              ? " selected"
              : "")
          }
          tabIndex={-1}
          aria-selected={option.defaultSelected}
          onClick={() => setSelectedItem(option.label)}
        >
          <div className="br-radio">
            <input
              ref={ref}
              id={option.id}
              type="radio"
              name={option.name}
              value={option.value}
              defaultChecked={option.defaultSelected}
              {...rest}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        </div>
      ))}
    </div>
  );
});
