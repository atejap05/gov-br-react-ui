import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { BasicInput } from "./BasicInput";
import { InputProps } from "./@types";
import { InputButton } from "./InputButton";
import { useState } from "react";

const inputVariants = cva("br-input", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    highlight: {
      true: "input-highlight",
      false: "",
    },
    inline: {
      true: "input-inline",
      false: "",
    },
  },
});

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      type = "text",
      highlight = false,
      inline = false,
      icon,
      id,
      label,
      placeholder,

      className,
      ...props
    }: InputProps,
    ref
  ) => {
    const [inputType, setInputType] = useState(type);

    const classes = cn(inputVariants({ size, highlight, inline }), className);

    return (
      <div
        className={cn(classes, {
          "input-button": true,
        })}
      >
        <BasicInput
          ref={ref}
          type={inputType}
          label={label}
          placeholder={placeholder}
          id={id}
          icon={icon}
          {...props}
        >
          <InputButton
            onToggleIcon={value => setInputType(value)}
            inputType={type}
          />
        </BasicInput>
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
