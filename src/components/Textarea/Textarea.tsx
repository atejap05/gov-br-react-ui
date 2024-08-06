import "../../style.css";
import React, { forwardRef, useState } from "react";
import { cva } from "class-variance-authority";
import { nanoid } from "nanoid";

const textareaVariants = cva("br-textarea", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    status: {
      success: "success",
      warning: "warning",
      danger: "danger",
      info: "info",
    },
    dark: {
      true: "dark-mode",
      false: "",
    },
    disabled: {
      true: "disabled",
      false: "",
    },
  },
});

const setIcon = (status: string | null | undefined) => {
  switch (status) {
    case "success":
      return "fas fa-check-circle";
    case "warning":
      return "fas fa-exclamation-triangle";
    case "danger":
      return "fas fa-times-circle";
    case "info":
      return "fas fa-info-circle";
    default:
      return "";
  }
};

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    className?: string;
    size?: "sm" | "md" | "lg";
    dark?: boolean;
    label?: string;
    placeholder?: string;
    helperText?: string;
    disabled?: boolean;
    labelLeft?: boolean;
    limit?: number;
    value?: string;
    feedback?: {
      message: string;
      status: "success" | "warning" | "danger" | "info" | null | undefined;
    };
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size = "md",
      feedback,
      dark,
      label,
      placeholder,
      helperText,
      disabled,
      labelLeft,
      limit,
      value,
      onChange,
      ...props
    }: TextareaProps,
    ref
  ) => {
    const [typedValue, setTypedValue] = useState("");
    const status = feedback?.status || null;
    const classes = textareaVariants({
      size,
      status,
      dark,
      disabled,
      className,
    });
    const id = nanoid();

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (limit && e.target.value.length > limit) {
        return;
      }
      setTypedValue(e.target.value);
      onChange && onChange(e);
    };

    const renderLabel = () => {
      return <label htmlFor={`textarea-${id}`}>{label}</label>;
    };

    const renderTextarea = () => {
      return (
        <textarea
          ref={ref}
          id={`textarea-${id}`}
          placeholder={placeholder}
          onChange={onChangeHandler}
          disabled={disabled}
          value={value || typedValue}
          {...props}
        ></textarea>
      );
    };

    const renderFeedback = () => {
      if (feedback) {
        return (
          <span className={`feedback ${feedback.status}`} role="alert">
            <i className={setIcon(feedback.status)} aria-hidden="true"></i>
            <span>{feedback.message}</span>
          </span>
        );
      }
      return null;
    };

    const renderHelperText = () => {
      if (!feedback && !typedValue) {
        return <p className="text-base mt-1">{helperText}</p>;
      }
      return null;
    };

    const renderCaraclterLimit = () => {
      if (limit && typedValue && !feedback) {
        return (
          <div className="text-base mt-1">
            <span className="limit">
              Limite máximo de{" "}
              <strong>
                {typedValue?.length || 0}/{limit}
              </strong>{" "}
              caracteres
            </span>
          </div>
        );
      } else if (!limit && typedValue && !feedback) {
        return (
          <div className="text-base mt-1">
            <span className="characters">
              <strong>{typedValue?.length || 0}</strong> caracteres
            </span>
          </div>
        );
      }
      return null;
    };

    const renderLabelTop = () => {
      return (
        <>
          {renderLabel()}
          {renderTextarea()}
          {renderFeedback()}
          {renderHelperText()}
          {renderCaraclterLimit()}
        </>
      );
    };

    const renderLabelLeft = () => {
      return (
        <>
          <div className="col-auto pt-half">{renderLabel()}</div>
          <div className="col">
            {renderTextarea()}
            {renderFeedback()}
            {renderHelperText()}
            {renderCaraclterLimit()}
          </div>
        </>
      );
    };

    return (
      <div className={classes}>
        <div className="row">
          {labelLeft ? renderLabelLeft() : renderLabelTop()}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
