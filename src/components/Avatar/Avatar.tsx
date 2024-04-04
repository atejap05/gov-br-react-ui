import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import React from "react";
import { AvatarContent } from "./AvatarContent";

/////////// Avatar Component ///////////

const avatarVariants = cva("br-avatar", {
  variants: {
    size: {
      sm: "small",
      md: "medium",
      lg: "large",
    },

    // status: {
    //   online: " online",
    //   offline: "offline",
    //   busy: "busy",
    //   away: "away",
    // },
  },
  defaultVariants: {
    size: "md",
    // status: "online",
  },
});

export type AvatarProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md" | "lg";
  src: string;
  alt: string;
};

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ size = "md", src, alt, className, ...props }: AvatarProps, ref) => {
    const classes = cn(avatarVariants({ size }), className);
    return (
      <span className="br-avatar">
        <AvatarContent
          ref={ref}
          className={classes}
          src={src}
          alt={alt}
          {...props}
        />
      </span>
    );
  }
);
