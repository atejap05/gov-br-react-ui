import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import "../../index.css";

//// Switch Component ////

const switchVariants = cva("br-switch", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
    align: {
      right: "right",
      top: "top",
      left: "",
    },
    icon: {
      true: "icon",
      false: "",
    },
  },
});

export type SwitchProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  align?: "right" | "top" | "left";
  icon?: boolean;
  id: string;
  name?: string;
  label: string;
  value?: string;
  rotulo?: Record<string, string>;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      size = "md",
      disabled = false,
      align = "left",
      icon = false,
      id,
      label,
      value,
      rotulo,
      className,
      ...props
    }: SwitchProps,
    ref
  ) => {
    const classes = switchVariants({ size, disabled, align, icon, className });

    return (
      <div className={classes}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          name={id}
          role="switch"
          value={value}
          disabled={disabled}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
        {rotulo && (
          <span
            className="switch-data"
            data-enabled={rotulo.true}
            data-disabled={rotulo.false}
          ></span>
        )}
      </div>
    );
  }
);
