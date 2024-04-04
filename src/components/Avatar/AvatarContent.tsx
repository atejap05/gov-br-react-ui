import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { forwardRef } from "react";
import { useIsValidImage } from "../../hooks/useIsValidImage";

/////////// Avatar Component ///////////

const avatarVariants = cva("content");

export type AvatarProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  src: string;
  alt: string;
};

export const AvatarContent = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, className, ...props }: AvatarProps, ref) => {
    const isValidImage = useIsValidImage(src);

    const classes = cn(avatarVariants(), className);

    const getInitials = (name: string) => name[0].toUpperCase();

    if (!alt) {
      throw new Error("The alt prop is required for the Avatar component");
    }

    return (
      <span ref={ref} className={classes} {...props}>
        {isValidImage ? <img src={src} alt={alt} /> : getInitials(alt)}
      </span>
    );
  }
);
