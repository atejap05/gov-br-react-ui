import { cva } from "class-variance-authority";
import { cn } from "../../utils";
import { RadioItem, RadioItemProps } from "./RadioItem";
import { Alert, type AlertProps } from "../Alert";

/////// RadioGroup ///////

const radioGroupVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "d-inline-block mr-5 mb-3 text-nowrap",
      vertical: "mb-3",
    },
  },
});

export type RadioGroupProps = {
  value?: string;
  title?: string;
  subtitle?: string;
  orientation?: "horizontal" | "vertical";
  feedback?: AlertProps;
  className?: string;
  onChoose?: (value: string) => void;
  options: RadioItemProps[];
};

export const RadioGroup = ({
  title,
  subtitle,
  feedback,
  orientation = "vertical",
  className,
  options,
  onChoose,
}: RadioGroupProps) => {
  const classes = cn(radioGroupVariants({ orientation }));

  return (
    <div className={cn("p-2", className)}>
      {title && <p className="label text-lg mb-0">{title}</p>}
      {subtitle && <p className="help-text text-sm">{subtitle}</p>}
      {options.map(option => (
        <div key={option.id} className={classes}>
          <RadioItem
            {...option}
            onChange={e => {
              onChoose && onChoose(e.target.value);
            }}
          />
        </div>
      ))}
      {feedback && <Alert status={feedback.status} text={feedback.text} />}
    </div>
  );
};
