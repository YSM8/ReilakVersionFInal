import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TaskModalDetailsForm = () => {

    const [startDate, setStartDate] = useState(new Date());
  return (
    <form action="#">
      <div className="input-box">
        <input type="text" required value="title" />
        <label htmlFor="">Titulo</label>
      </div>
      <div className="date-box">
        <DatePicker
          dateFormat="dd-MM-yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <label htmlFor="">Vencimiento</label>
      </div>
      <div className="textarea-box">
        <textarea required value="descripcion"></textarea>
        <label htmlFor="">Decripcion</label>
      </div>
    </form>
  );
};
