import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const TaskModalForm = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "$blanco-2",
    },
    overlay: {
      transition: "opacity .2s ease-in-out",
      backgroundColor: "rgba(53, 5, 5, 0.3)",
    },
  };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Modal
      isOpen={props.show}
      onRequestClose={props.close}
      style={customStyles}
      closeTimeoutMS={200}
    >
      <div className="task__form">
        <form action="#">
          <div className="input-title">
            <h3>Crear tarea</h3>
          </div>
          <div className="input-box">
            <input type="text" required />
            <label htmlFor="">Ingrese un titulo</label>
          </div>
          <div className="date-box">
          <DatePicker dateFormat = "dd-MM-yyyy"  selected={startDate} onChange={(date) => setStartDate(date)} />
            <label htmlFor="">Seleccione una fecha</label>
          </div>
          <div className="textarea-box">
            <textarea required ></textarea>
            <label htmlFor="">Ingresa una descripcion</label>
          </div>
          <div className="input-button">
            <button type="submit">Subir</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
