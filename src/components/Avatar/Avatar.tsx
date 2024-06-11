import React from "react";
import { cva } from "class-variance-authority";
import { AvatarContent } from "./AvatarContent";
import "../../style.css";

/////////// Avatar Component ///////////


const avatarVariants = cva("br-avatar", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },

  },
  defaultVariants: {
    size: "md",
  },
});

export type AvatarProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
  src: string;
  alt: string;
  icon?: boolean;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { size = "md", icon = false, src, alt, className, ...props }: AvatarProps,
    ref
  ) => {
    const classes = avatarVariants({ size, className });
    return (
      <span className="br-avatar">
        <AvatarContent
          ref={ref}
          className={classes}
          src={src}
          alt={alt}
          icon={icon}
          {...props}
        />
      </span>
    );
  }
);
