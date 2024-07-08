import React, { forwardRef, useState } from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { cva } from "class-variance-authority";

const tagSelectionVariants = cva("br-tag interaction-select", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
  },
});

export type TagSelectionProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  label?: string;
  value?: string;
  name?: string;
  multiselect?: boolean;
  icon?: FontAwesomeIconProps["icon"];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  size?: "sm" | "md" | "lg";
};

const TagSelection = forwardRef<HTMLSpanElement, TagSelectionProps>(
  (
    {
      id,
      name,
      value,
      label,
      icon,
      multiselect,
      onChange,
      size = "md",
      className,
    }: TagSelectionProps,
    ref
  ) => {
    const [selected, setSelected] = useState(false);
    const classes = tagSelectionVariants({
      size,
      className,
    });
    return (
      <span ref={ref} className={selected ? `${classes} selected` : classes}>
        <input
          id={id}
          type={multiselect ? "checkbox" : "radio"}
          name={name}
          value={value}
          onBlur={() => (multiselect ? null : setSelected(false))}
          checked={selected}
          onChange={event => {
            onChange && onChange(event);
            setSelected(event.target.checked);
          }}
        />
        <label htmlFor={id}>
          {icon && <FontAwesomeIcon className="fas" icon={icon} />}
          <span id={`${id}-label`}>{label}</span>
        </label>
      </span>
    );
  }
);

TagSelection.displayName = "Tag";

export { TagSelection };
