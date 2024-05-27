import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { cva } from "class-variance-authority";
import "../../index.css";

const alertVariants = cva("feedback", {
  variants: {
    status: {
      danger: "danger",
      success: "success",
      warning: "warning",
      info: "info",
    },
  },
});

export type AlertProps = {
  status: "danger" | "success" | "warning" | "info";
  text: string;
  className?: string;
};

const setIcon = (status: string) => {
  switch (status) {
    case "danger":
      return faTimes;
    case "success":
      return faCheckCircle;
    case "warning":
      return faExclamationTriangle;
    case "info":
      return faInfoCircle;
    default:
      return faInfoCircle;
  }
};

export const Alert = ({ text, status, className }: AlertProps) => {
  const classes = alertVariants({ status, className });
  const icon = setIcon(status);

  return (
    <span className={classes}>
      <FontAwesomeIcon icon={icon} />
      {text}
    </span>
  );
};
