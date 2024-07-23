import "../../style.css";
import React, { forwardRef } from "react";
import {
  FontAwesomeIconProps,
  FontAwesomeIcon,
} from "@fortawesome/react-fontawesome";
import { cva } from "class-variance-authority";

const stepVariants = cva("br-step", {
  variants: {
    direction: {
      vertical: "vertical",
      horizontal: "horizontal",
    },

    dark: {
      true: "dark-mode",
      false: "",
    },
  },
});

type TStep = {
  label?: string;
  index: number | string;
  alert?: "success" | "danger" | "warning" | "info";
  disabled?: boolean;
  active: boolean;
  icon?: FontAwesomeIconProps["icon"];
};

export type StepProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  direction?: "vertical" | "horizontal";
  label?: "right" | "left" | "top" | "bottom";
  dark?: boolean;
  scroll?: boolean;
  onClick?: (step: TStep) => void;
  steps: TStep[];
};

const Step = forwardRef<HTMLDivElement, StepProps>(
  (
    {
      className,
      direction = "vertical",
      label = "right",
      scroll = false,
      steps,
      dark,
      onClick,
    }: StepProps,
    ref
  ) => {
    const classes = stepVariants({ className, direction, dark });

    return (
      <nav
        ref={ref}
        className={classes}
        data-initial="1"
        data-label={label}
        data-scroll={scroll ? "data-scroll" : null}
        role="none"
      >
        <div
          className="step-progress"
          role="listbox"
          aria-orientation={direction}
          aria-label="Lista de Opções"
        >
          {steps.map(step => (
            <button
              key={step.index}
              className="step-progress-btn"
              role="option"
              type="button"
              step-num={!step.icon ? step.index : null}
              disabled={step.disabled}
              onClick={() => onClick && onClick(step)}
              // @ts-expect-error - This is a known issue with the current version of the library
              active={step.active ? "true" : null}
              data-alert={step.alert}
            >
              {step.label && <span className="step-info">{step.label}</span>}
              {step.icon && (
                <FontAwesomeIcon
                  className="step-icon w-1"
                  aria-hidden
                  icon={step.icon}
                />
              )}
              {step.alert && <span className="step-alert"></span>}
            </button>
          ))}
        </div>
      </nav>
    );
  }
);

Step.displayName = "Step";

export { Step };
