import "../../index.css";
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
  status?: "valid" | "invalid";
  value?: string;
  disabled?: boolean;
  labeled?: boolean;
  defaultChecked?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      name,
      label,
      status,
      value,
      disabled = false,
      labeled = true,
      defaultChecked = false,
      className,
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
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);
