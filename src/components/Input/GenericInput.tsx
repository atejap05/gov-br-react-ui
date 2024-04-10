import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const GenericInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <input type={type} ref={ref} {...props} />;
  }
);
GenericInput.displayName = "Input";

export { GenericInput };
