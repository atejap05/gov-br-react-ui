import "../../style.css";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { useIsValidImage } from "../../hooks/useIsValidImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/////////// Avatar Content Component ///////////

const avatarVariants = cva("content");

export type AvatarProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
  src: string;
  alt: string;
  icon?: boolean;
};

export const AvatarContent = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, icon, className, ...props }: AvatarProps, ref) => {
    const isValidImage = useIsValidImage(src);
    const classes = avatarVariants({ className });
    const getInitials = (name: string) => name[0].toUpperCase();

    if (!alt) {
      throw new Error("The alt prop is required for the Avatar component");
    }

    const renderContent = () => {
      if (icon) {
        return <FontAwesomeIcon icon={faUser} />;
      } else if (isValidImage) {
        return <img src={src} alt={alt} />;
      } else {
        return getInitials(alt);
      }
    };

    return (
      <span ref={ref} className={classes} {...props}>
        {renderContent()}
      </span>
    );
  }
);
