import "../../style.css";
import { useState } from "react";
import { cva } from "class-variance-authority";
import { Alert, type AlertProps } from "../Alert";
import { Checkbox, CheckboxProps } from "./Checkbox";

//////// CheckboxGroup Component ////////

const checkboxGroupVariants = cva("mb-2", {
  variants: {
    orientation: {
      horizontal: "d-inline-block mr-5",
      vertical: "",
    },
  },
});

type SelectedOption = {
  id: string;
  label: string;
  disabled?: boolean;
  name: string;
  checked: boolean;
};

export type CheckboxGroupProps = {
  value?: string;
  title?: string;
  subtitle?: string;
  orientation?: "horizontal" | "vertical";
  feedback?: AlertProps;
  className?: string;
  onChange?: (selectedOptions: SelectedOption[]) => void;
  options: CheckboxProps[];
};

export const CheckboxGroup = ({
  title,
  subtitle,
  orientation,
  feedback,
  className,
  onChange,
  options,
}: CheckboxGroupProps) => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>(
    options.map(option => ({
      id: option.id,
      label: option.label || "",
      disabled: option.disabled || false,
      name: option.name,
      checked: option.defaultChecked || false,
    }))
  );

  return (
    <div>
      {title && <p className="label mb-0">{title}</p>}
      {subtitle && <p className="text-down-01">{subtitle}</p>}
      {options.map(option => (
        <div
          key={option.id}
          className={checkboxGroupVariants({ orientation, className })}
        >
          <Checkbox
            id={option.id}
            name={option.name}
            label={option.label}
            status={option.status}
            value={option.value}
            disabled={option.disabled}
            labeled={option.labeled}
            defaultChecked={option.defaultChecked}
            onChange={e => {
              const newSelectedOptions = selectedOptions.map(selectedOption =>
                selectedOption.name === option.name
                  ? {
                      name: option.name,
                      checked: e.target.checked,
                      id: option.id,
                      label: option.label || "",
                      disabled: option.disabled || false,
                    }
                  : selectedOption
              );

              setSelectedOptions(newSelectedOptions);
              onChange && onChange(newSelectedOptions);
            }}
          />
        </div>
      ))}
      <div className="mt-3">
        {feedback && <Alert status={feedback.status} text={feedback.text} />}
      </div>
    </div>
  );
};
