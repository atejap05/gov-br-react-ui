import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { GenericInput } from "./GenericInput";
import { IconInput } from "./IconInput";

const inputVariants = cva("br-input", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    outlined: {
      true: "input-highlight",
      false: "",
    },
  },
});

export type InputProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  outlined?: boolean;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  id: string;
  label?: string;
  icon?: FontAwesomeIconProps["icon"];
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      type = "text",
      outlined = false,
      icon,
      label,
      id,
      placeholder,
      className,
      ...props
    }: InputProps,
    ref
  ) => {
    const classes = cn(inputVariants({ size, outlined }), className);

    return (
      <div className={classes}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        {!icon ? (
          <GenericInput
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            {...props}
          />
        ) : null}
        {icon ? (
          <IconInput
            ref={ref}
            Icon={icon}
            placeholder={placeholder}
            id={id}
            type={type}
            {...props}
          />
        ) : null}
      </div>
    );
  }
);

// TODO:
/** Propriedades do componente Input */
/**
 * placeholder
 * type
 * id
 *
 * size
 * icon
 * button
 * outlined
 * inline
 * disabled
 * validação e estados (error, warning, success)
 * dark mode
 */
