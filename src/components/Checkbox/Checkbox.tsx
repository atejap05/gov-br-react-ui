import "../../style.css";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

//////// Checkbox Component ////////

const checboxVariants = cva("br-checkbox mt-0", {
  variants: {
    status: {
      valid: "valid",
      invalid: "invalid",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
    labeled: {
      true: "",
      false: "hidden-label",
    },
  },
});

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  id: string;
  name: string;
  indeterminate?: boolean;
  status?: "valid" | "invalid";
  value?: string;
  disabled?: boolean;
  labeled?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      status,
      value,
      indeterminate = false,
      disabled = false,
      labeled = true,
      defaultChecked = false,
      className,
      onChange,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const classes = checboxVariants({ status, disabled, labeled, className });

    return (
      <div className={classes}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          data-child="check-01"
          // @ts-expect-error - indeterminate is not a valid attribute for a checkbox
          indeterminate={indeterminate ? "indeterminate" : null}
          onChange={onChange}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);
