import React, { useState } from 'react'
import { TaskModalDetails } from './TaskModalDetails'

export const TaskBody = () => {

    const [showModal, setshowModal] = useState(false);

    return (
        <div className="task__body">
            <div className="task__body-card" onClick={() => setshowModal(true)}>
                <div className="task__body-card-title">
                    <h5>Modulo Video Lamada</h5>
                </div>
                <div className="task__body-card-details">
                    <div className="task__body-card-details-state">
                        Completa
                    </div>
                    <div className="task__body-card-details-date">
                        15/11/2021
                    </div>
                </div>
                <div className="task__body-card-description">
                    Terminar: conexion con backend y transmision en tiempo real
                </div>
                <div className="task__body-card-views">
                    <div className="task__body-card-views-opt">
                    <i class="fas fa-comment"></i> 7
                    </div>
                    <div className="task__body-card-views-opt">
                    <i class="fas fa-paperclip"></i> 5
                    </div>
                </div>
            </div>
            <TaskModalDetails show={showModal} close={() => setshowModal(false)} />
        </div>
    )
}
