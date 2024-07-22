import { forwardRef, useState, useEffect, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export type SelectContentProps = {
  onSelectChange: (listItem: string[]) => void;
  onClickOutside: (value: boolean) => void;
  allowMultiSelect?: boolean;
  options: {
    label: string;
    id: string;
  }[];
};

export const SelectContent = forwardRef<HTMLInputElement, SelectContentProps>(
  (
    { onSelectChange, onClickOutside, options, allowMultiSelect, ...rest },
    ref
  ) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
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
                        ? [...selectedItems, option.label]
                        : selectedItems.filter(item => item !== option.label)
                      : [option.label]
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
