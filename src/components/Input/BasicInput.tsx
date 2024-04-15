import React from "react";
import type { InputTypes } from "./@types";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { InputFeedback } from "./InputFeedback";

export type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  type?: InputTypes;
  feedback?: string;
  status?: "danger" | "warning" | "info" | "success" | null;
  children?: React.ReactNode;
  id: string;
  icon?: FontAwesomeIconProps["icon"];
};

const InputIcon = (icon: FontAwesomeIconProps["icon"]) => {
  return (
    <div className="input-icon">
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

const BasicInput = React.forwardRef<HTMLInputElement, BasicInputProps>(
  ({ label, id, icon, type, status, children, feedback, ...props }, ref) => {
    return (
      <>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <div className="input-group">
          {icon ? InputIcon(icon) : null}
          <input
            ref={ref}
            id={id}
            type={type}
            autoComplete="new-password"
            {...props}
          />
          {children}
          {feedback && <InputFeedback status={status} feedback={feedback} />}
        </div>
      </>
    );
  }
);
BasicInput.displayName = "Input";

export { BasicInput };
