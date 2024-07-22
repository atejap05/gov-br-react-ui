import "../../style.css";
import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

const tagCountVariants = cva("br-tag count bg-danger", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },
  },
});

export type TagCountProps = React.HTMLAttributes<HTMLSpanElement> & {
  className?: string;
  count: string;
  title?: string;
  size?: "sm" | "md" | "lg";
};

const TagCount = forwardRef<HTMLSpanElement, TagCountProps>(
  ({ count, size, title, className }: TagCountProps, ref) => {
    const classes = tagCountVariants({
      size,
      className,
    });
    return (
      <div className="d-flex align-items-center">
        <span ref={ref} className={classes} title={title}>
          <span aria-hidden="true">{count}</span>
        </span>
      </div>
    );
  }
);

TagCount.displayName = "Tag";

export { TagCount };
