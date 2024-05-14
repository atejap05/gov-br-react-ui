import "@/styles/index.css";
import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {
  faInfoCircle,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const InputFeedbackVariants = cva(
  "flex justify-start items-center gap-2 py-1 px-2 w-fit font-semibold italic",
  {
    variants: {
      status: {
        danger: "bg-[#e52207] text-white",
        warning: "bg-[#ffcd07]",
        info: "bg-[#155bcb] text-white",
        success: "bg-[#168821] text-white ",
      },
    },
  }
);

type Status = "danger" | "warning" | "info" | "success" | null;

type InputFeedbackProps = {
  status?: Status;
  feedback: string;
  className?: string;
};

const FeedBackIcon = ({ status }: { status: Status }) => {
  let icon: FontAwesomeIconProps["icon"];

  switch (status) {
    case "danger":
      icon = faTimesCircle;
      break;
    case "warning":
      icon = faExclamationTriangle;
      break;
    case "info":
      icon = faInfoCircle;
      break;
    case "success":
      icon = faCheckCircle;
      break;
    case null:
      return null;
  }

  return <FontAwesomeIcon icon={icon} />;
};

export const InputFeedback = ({
  status,
  feedback,
  className,
}: InputFeedbackProps) => {
  const classes = cn(InputFeedbackVariants({ status }), className);

  if (feedback && !status) {
    console.warn("You must provide a status prop when feedback is provided.");
  }

  if (!status) return null;

  return (
    <span className={classes}>
      <FeedBackIcon status={status} />
      {feedback}
    </span>
  );
};
