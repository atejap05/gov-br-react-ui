import { useEffect } from "react";
import { Portuguese } from "flatpickr/dist/l10n/pt.js";
import flatpickr from "flatpickr";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "../../style.css";
import { getArrows, setAttributes } from "./datetimepicker.conf";
import { DatePickerInput } from "./DatePickerInput";
import { useDateFormat } from "./useDateFormat";

export type DateTimePickerProps = {
  id: string;
  label?: string;
  placeholder?: string;
  enableTime?: boolean;
  noCalendar?: boolean;
  isTimer?: boolean;
  className?: string;
  onChange?: (value: Date | Date[]) => void;
  mode?: "single" | "multiple" | "range";
  options?: flatpickr.Options.Options;
};

export const DateTimePicker = ({
  label,
  enableTime = false,
  noCalendar = false,
  mode = "single",
  placeholder,
  onChange,
  options,
  id,
  className,
}: DateTimePickerProps) => {
  const { nextArrow, prevArrow } = getArrows();
  const dateFormat = useDateFormat({ enableTime, noCalendar });
  useEffect(() => {
    setAttributes();
  }, []);
  return (
    <Flatpickr
      data-enable-time={true}
      onChange={onChange}
      options={{
        nextArrow,
        prevArrow,
        time_24hr: false,
        locale: Portuguese,
        mode: mode,
        minuteIncrement: 1,
        allowInput: true,
        disableMobile: true,
        dateFormat: dateFormat,
        enableTime: enableTime,
        noCalendar: noCalendar,
        ...options,
      }}
      render={({ defaultValue }, ref) => {
        return (
          <DatePickerInput
            className={className}
            id={id}
            defaultValue={defaultValue}
            label={label}
            isTimer={enableTime && noCalendar}
            placeholder={placeholder}
            ref={ref}
          />
        );
      }}
    />
  );
};
