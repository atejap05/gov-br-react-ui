import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faCheckCircle,
  faTimesCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

const InputFeedbackVariants = cva(
  "flex justify-start items-center gap-1 py-1 px-2 w-fit font-semibold text-sm rounded-md italic",
  {
    variants: {
      status: {
        danger: "bg-[#e52207] text-white italic ",
        warning: "bg-[#ffcd07] italic",
        info: "bg-[#155bcb] text-white italic",
        success: "bg-[#168821] text-white  italic",
      },
    },
  }
);

type InputFeedbackProps = {
  status?: "danger" | "warning" | "info" | "success" | null;
  feedback: string;
  className?: string;
};

export const InputFeedback = ({
  status,
  feedback,
  className,
}: InputFeedbackProps) => {
  const classes = cn(InputFeedbackVariants({ status }), className);

  return (
    <span className={classes}>
      {status === "danger" && (
        <FontAwesomeIcon
          icon={faTimesCircle}
          className={InputFeedbackVariants({ status })}
        />
      )}
      {status === "warning" && (
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className={InputFeedbackVariants({ status })}
        />
      )}
      {status === "info" && (
        <FontAwesomeIcon
          icon={faInfoCircle}
          className={InputFeedbackVariants({ status })}
        />
      )}
      {status === "success" && (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className={InputFeedbackVariants({ status })}
        />
      )}

      {feedback}
    </span>
  );
};
