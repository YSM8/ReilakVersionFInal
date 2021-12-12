import React, { useState } from "react";
import { TaskModalForm } from "./TaskModalForm";

export const TaskHeader = () => {

  const [showModal, setshowModal] = useState(false);


  return (
    <div className="task__header">
      <div className="task__header-left">
        <div className="task__header-title">
          <h4>Tablero de tareas</h4>
        </div>
        <div className="task__header-opt">
          <button className="task__header-opt-add" onClick={() => setshowModal(true)}>
            <i class="fas fa-plus"></i> Crear
          </button>
          <div></div>
        </div>
      </div>
      <div className="task__header-right">
        <div className="task__header-info">
          <div className="task__header-info-item">Completados 5</div>
          <div className="task__header-info-item">En proceso 1</div>
          <div className="task__header-info-item">Atrasadas 0</div>
        </div>
      </div>
      <TaskModalForm show={showModal} close={() => setshowModal(false)} />
    </div>
  );
};
