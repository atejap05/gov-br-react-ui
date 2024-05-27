import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import "../../style.css";

export type ListItemIconProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: FontAwesomeIconProps["icon"];
  className?: string;
};

export const ListItemIcon = ({ icon, className }: ListItemIconProps) => {
  return (
    <div className="col-auto">
      <FontAwesomeIcon className={className} icon={icon} />
    </div>
  );
};
