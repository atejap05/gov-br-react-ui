import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";

const radioItemVariants = cva("br-radio", {
  variants: {
    small: {
      true: "small",
      false: "",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
    valid: {
      true: "valid",
      false: "invalid",
    },
  },
});

export type RadioItemProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  value: string;
  label: string;
  small?: boolean;
  disabled?: boolean;
  valid?: boolean;
};

export const RadioItem = React.forwardRef<HTMLInputElement, RadioItemProps>(
  (
    {
      id,
      name,
      value,
      small = false,
      disabled = false,
      valid,
      label,
      className,
      ...props
    }: RadioItemProps,
    ref
  ) => {
    const classes = cn(
      radioItemVariants({ small, disabled, valid }),
      className
    );
    return (
      <div className={classes}>
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
          type="radio"
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);
