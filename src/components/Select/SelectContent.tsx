import { forwardRef, useState, useEffect, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export type TOptions = {
  label: string;
  id: string;
}[];

export type SelectContentProps = {
  onSelectChange: (listItem: TOptions) => void;
  onClickOutside: (value: boolean) => void;
  allowMultiSelect?: boolean;
  options: TOptions;
};

export const SelectContent = forwardRef<HTMLInputElement, SelectContentProps>(
  (
    { onSelectChange, onClickOutside, options, allowMultiSelect, ...rest },
    ref
  ) => {
    const [selectedItems, setSelectedItems] = useState<TOptions>([]);
    const brListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      onSelectChange(selectedItems);
    }, [selectedItems, onSelectChange]);

    useClickOutside({ onClickOutside, elementRef: brListRef });

    const inputConf = allowMultiSelect
      ? { className: "br-checkbox", type: "checkbox" }
      : { className: "br-radio", type: "radio" };

    return (
      <div ref={brListRef} className="br-list d-block">
        {options.map(option => (
          <div key={option.id} className={"br-item"}>
            <div className={inputConf.className}>
              <input
                ref={ref}
                id={option.id}
                type={inputConf.type}
                defaultValue={option.label}
                onChange={e =>
                  setSelectedItems(
                    allowMultiSelect
                      ? e.target.checked
                        ? [...selectedItems, option]
                        : selectedItems.filter(item => item.id !== option.id)
                      : [option]
                  )
                }
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
