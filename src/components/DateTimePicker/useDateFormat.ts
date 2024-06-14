import { useState, useEffect } from "react";

const FORMAT = {
  date: "d/m/Y",
  time: "H:i",
  datetime: "d/m/Y H:i",
};

type TUseDateFormat = {
  enableTime: boolean;
  noCalendar: boolean;
};

export const useDateFormat = ({ enableTime, noCalendar }: TUseDateFormat) => {
  const [dateFormat, setDateFormat] = useState(FORMAT.date);

  useEffect(() => {
    if (noCalendar && enableTime) {
      setDateFormat(FORMAT.time);
    } else if (!noCalendar && enableTime) {
      setDateFormat(FORMAT.datetime);
    }
  }, [enableTime, noCalendar]);

  return dateFormat;
};
