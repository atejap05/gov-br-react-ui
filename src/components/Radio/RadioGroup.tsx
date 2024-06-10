import { cva } from "class-variance-authority";
import { RadioItem, RadioItemProps } from "./RadioItem";
import { Alert, type AlertProps } from "../Alert";
import "../../style.css";
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
  onSelect?: (value: string) => void;
  options: RadioItemProps[];
};

export const RadioGroup = ({
  title,
  subtitle,
  feedback,
  orientation = "vertical",
  className,
  options,
  onSelect,
}: RadioGroupProps) => {
  const classes = radioGroupVariants({ orientation });

  return (
    <>
      <div className={"p-2" + className}>
        {title && <p className="label mb-0">{title}</p>}
        {subtitle && <p className="help">{subtitle}</p>}
        {options.map(option => (
          <div key={option.id} className={classes}>
            <RadioItem
              {...option}
              onChange={e => {
                onSelect && onSelect(e.target.value);
              }}
            />
          </div>
        ))}
      </div>
      {feedback && <Alert status={feedback.status} text={feedback.text} />}
    </>
  );
};
