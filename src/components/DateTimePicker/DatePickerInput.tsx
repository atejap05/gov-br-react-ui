import React from "react";
import { Button } from "../Button";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { cva } from "class-variance-authority";

const dateTimePickerVariants = cva("br-datetimepicker");

export type DatePickerInputProps =
  React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    label?: string;
    isTimer?: boolean;
    className?: string;
  };

export const DatePickerInput = React.forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(({ id, label, isTimer, className, ...props }: DatePickerInputProps, ref) => {
  const classes = dateTimePickerVariants({ className });
  const onClickHandler = () => {
    const datepicker = document.querySelector(".flatpickr-calendar");
    if (datepicker) {
      datepicker.classList.toggle("open");
    }
  };

  return (
    <div className={classes} data-mode="single" data-type="text">
      <div className="br-input has-icon">
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} className={className} type="text" {...props} />
        <Button
          circle
          size="sm"
          variant="tertiary"
          aria-label="Abrir Timepicker"
          data-toggle="data-toggle"
          tabIndex={-1}
          aria-hidden="true"
          onClick={onClickHandler}
          icon={isTimer ? faClock : faCalendarAlt}
        />
      </div>
    </div>
  );
});
