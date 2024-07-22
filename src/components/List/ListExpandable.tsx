import "../../style.css";
import { useState, forwardRef } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "./";
import { ItemButton } from "../Item";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Divider } from "../Divider";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ListExpandableProps = React.HTMLAttributes<HTMLUListElement> & {
  className?: string;
  label: string;
  options: {
    id: string;
    icon?: FontAwesomeIconProps["icon"];
    primaryText: string;
    secondaryText?: string;
  }[];
};

export const ListExpandable = forwardRef<HTMLUListElement, ListExpandableProps>(
  ({ className, options, label }: ListExpandableProps, ref) => {
    const [toggleIcon, setToggleIcon] = useState(faChevronDown);
    const [expanded, setExpanded] = useState(false);

    return (
      <List ref={ref} className={className}>
        <ItemButton
          icon={toggleIcon}
          onClick={() => {
            setToggleIcon(
              toggleIcon === faChevronDown ? faChevronUp : faChevronDown
            );
            setExpanded(!expanded);
          }}
        >
          <ListItemText primary={label} />
        </ItemButton>
        <List className={expanded ? "" : "hidden"}>
          {options.map(option => (
            <div key={option.id}>
              <ListItem>
                {option.icon && <ListItemIcon icon={option.icon} />}
                <ListItemText
                  primary={option.primaryText}
                  secondary={option.secondaryText}
                />
              </ListItem>
              <Divider size="sm" />
            </div>
          ))}
        </List>
      </List>
    );
  }
);
