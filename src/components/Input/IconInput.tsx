import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { GenericInput } from "./GenericInput";
import React from "react";

type InputGroupProps = React.HtmlHTMLAttributes<HTMLInputElement> & {
  Icon: FontAwesomeIconProps["icon"];
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
};

export const IconInput = React.forwardRef<HTMLInputElement, InputGroupProps>(
  ({ type, placeholder, Icon, ...rest }: InputGroupProps, ref) => {
    return (
      <div className="input-group">
        <div className="input-icon">
          <FontAwesomeIcon icon={Icon} />
        </div>
        <GenericInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);
