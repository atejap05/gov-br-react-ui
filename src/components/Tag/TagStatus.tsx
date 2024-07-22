import "../../style.css";
import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

const tagVariants = cva("br-tag status", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
    status: {
      online: "bg-success",
      offline: "bg-danger",
      away: "bg-warning",
    },
  },
});

export type TagPropsStatus = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  label?: string;
  status?: "online" | "offline" | "away";
  size?: "sm" | "md" | "lg";
};

const TagStatus = forwardRef<HTMLSpanElement, TagPropsStatus>(
  (
    { label, status = "online", size = "md", className }: TagPropsStatus,
    ref
  ) => {
    const classes = tagVariants({ status, size, className });
    return (
      <div className="d-flex align-items-center mt-1">
        <span
          ref={ref}
          className={classes}
          aria-describedby="tag-status"
        ></span>
        {label && <span className="ml-1">{label}</span>}
      </div>
    );
  }
);

TagStatus.displayName = "Tag";

export { TagStatus };
