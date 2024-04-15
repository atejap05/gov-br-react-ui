import { useState, forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { BasicInput } from "./BasicInput";
import { InputProps } from "./@types";
import { InputButton } from "./InputButton";

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
    status: {
      danger: "danger",
      warning: "warning",
      info: "info",
      success: "success",
    },
  },
});

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "md",
      type = "text",
      highlight = false,
      inline = false,
      status,
      disabled,
      feedback,
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

    const classes = cn(
      inputVariants({ size, highlight, inline, status }),
      className
    );

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
          disabled={disabled}
          status={status}
          feedback={feedback}
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
