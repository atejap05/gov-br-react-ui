import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

///// ListItem Component /////

const listItemVariants = cva("br-item", {
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed z-10",
    },
  },
});

type Img = {
  src: string;
  alt: string;
  classNamne?: string;
};

// TODO: Refactor this type to use the `Action` type from the `Button` component
// TODO: Actions should be able to receive a function to be executed when clicked
type Action = {
  icon: FontAwesomeIconProps["icon"];
  className?: string;
};

export type ItemProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  img?: Img;
  action?: Action;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

export const Item = ({
  id,
  action,
  img,
  disabled,
  children,
  className,
}: ItemProps) => {
  const classes = cn(listItemVariants({ disabled }), className);

  return (
    <div id={id} className={classes} aria-disabled={disabled}>
      <div className="row align-items-center">
        {img && (
          <div className="col-auto">
            <img className={img.classNamne} src={img.src} alt={img.alt} />
          </div>
        )}
        <div className="col">{children}</div>
        {action && (
          <div className="col-auto">
            <Button
              className={action.className}
              circle
              variant="tertiary"
              disabled={disabled}
            >
              <FontAwesomeIcon icon={action.icon} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
