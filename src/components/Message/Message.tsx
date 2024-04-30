import { useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheckCircle,
  faInfoCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button";

const messageVariants = cva("br-message w-full", {
  variants: {
    status: {
      danger: "danger",
      info: "info",
      success: "success",
      warning: "warning",
    },
  },
});

export type MessageProps = {
  status: "danger" | "info" | "success" | "warning";
  title: string;
  message: string;
  className?: string;
  duration?: number;
};

const setIcon = (status: string) => {
  switch (status) {
    case "danger":
      return faTimes;
    case "info":
      return faInfoCircle;
    case "success":
      return faCheckCircle;
    case "warning":
      return faExclamationTriangle;
    default:
      return faTimes;
  }
};

export const Message = ({
  status,
  title,
  message,
  duration,
  className,
}: MessageProps) => {
  const [show, setShow] = useState(true);
  const classes = cn(messageVariants({ status }), className);
  const icon = setIcon(status);

  if (duration) {
    setTimeout(() => {
      setShow(false);
    }, duration);
  }

  if (!show) {
    return null;
  }

  return (
    <div className={classes}>
      <div className="icon">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      <div className="content" aria-label={title}>
        <span className="message-title mr-1">{title}</span>
        <span className="message-body">{message}</span>
      </div>
      <div className="close">
        <Button
          circle
          size="sm"
          variant="tertiary"
          type="button"
          aria-label="Fechar a messagem alterta"
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
    </div>
  );
};
