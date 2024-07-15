import React, { forwardRef, InputHTMLAttributes } from "react";

export type SelectInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

export const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  ({ id, label, placeholder, children, ...props }, ref) => {
    const [text, setText] = React.useState("");

    return (
      <div className="br-input" aria-expanded={true}>
        <label htmlFor={id}>{label}</label>
        <div className="input-group">
          <div className="input-icon">
            <i className="fas fa-search" aria-hidden="true"></i>
          </div>
          <input
            ref={ref}
            id={id}
            type="text"
            value={text}
            placeholder={placeholder}
            onChange={e => setText(e.target.value)}
            {...props}
          />
        </div>
        {children}
      </div>
    );
  }
);
