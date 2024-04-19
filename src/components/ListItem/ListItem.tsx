import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { Button } from "../Button";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";

///// ListItem Component /////

const listItemVariants = cva("br-item");

export type ListItemProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  text?: React.ReactNode;
  icon?: FontAwesomeIconProps["icon"];
  img?: string;
};

export const ListItem = () => {
  const classes = cn(listItemVariants({}));
  return (
    <div className={classes}>
      <div className="row align-items-center">
        <div className="col-auto">
          <img
            className="rounded"
            src="https://picsum.photos/40"
            alt="Imagem de exemplo do item sem interação"
          />
        </div>
        <div className="col ">
          Lorem ipsum <a href="javascript:void(0);">dolor</a>, sit amet
          consectetur <a href="javascript:void(0);">adipisicing</a> elit.
        </div>
        <div className="col-auto">
          <Button circle variant="tertiary">
            <FontAwesomeIcon icon={faCity} />
          </Button>
        </div>
      </div>
    </div>
  );
};
