import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { BasicInput } from "./BasicInput";
import { InputProps } from "./@types";

const inputVariants = cva("br-input w-full", {
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
      onSearch,
      ...props
    }: InputProps,
    ref
  ) => {
    const classes = cn(
      inputVariants({ size, highlight, inline, status }),
      className
    );

    // TODO: analisar a necessidade de remover essa validação e subsituir por um warning
    if (type !== "search" && onSearch) {
      throw new Error(
        "The prop 'onSearch' is only available for type 'search'."
      );
    }

    return (
      <div
        className={cn(classes, {
          "input-button": type === "password" || type === "search",
        })}
      >
        <BasicInput
          ref={ref}
          type={type}
          label={label}
          placeholder={placeholder}
          id={id}
          icon={icon}
          disabled={disabled}
          status={status}
          onSearch={onSearch}
          feedback={feedback}
          {...props}
        />
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
