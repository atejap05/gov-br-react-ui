import "../../style.css";
import React, { useState, forwardRef } from "react";
import { cva } from "class-variance-authority";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const tagVariants = cva("br-tag interaction", {
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
  },
});

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  icon?: FontAwesomeIconProps["icon"];
  closeable?: boolean;
  disabled?: boolean;
  label: string;
  size?: "sm" | "md" | "lg";
};

const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    { disabled, closeable, icon, size = "md", label, className }: TagProps,
    ref
  ) => {
    const [isClosed, setIsClosed] = useState(false);
    const classes = tagVariants({ disabled, size, className });
    return (
      <span ref={ref} className={isClosed ? `${classes} d-none` : classes}>
        {icon && <FontAwesomeIcon className="fas" icon={icon} />}
        <span>{label}</span>
        {closeable && (
          <Button
            className="bg-transparent"
            circle
            inverted={false}
            aria-label="Fechar"
            aria-describedby="interactivetag"
            icon={faTimes}
            onClick={() => setIsClosed(true)}
          />
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";

export { Tag };
