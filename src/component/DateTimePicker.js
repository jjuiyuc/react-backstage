import React from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";

const today = new DateObject();

const DateTimePicker = () => {
  return (
    <>
      <div>
        <DatePicker value={today} />
        {/* <Calendar value={today} /> */}
      </div>
    </>
  );
};
export default DateTimePicker;
