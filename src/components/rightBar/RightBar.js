import React from 'react'
import { Cumplea├▒osCercanos } from './Cumplea├▒osCercanos'
// import { EventosCercanos2 } from './EventosCercanos2'
import { EventosCercanos } from './EventosCercanos'

export const RightBar = () => {
    return (
        <div className="row barra_derecha">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <Cumplea├▒osCercanos />
                    </div>

                </div>
                <div className="row espacio-evento">
                    <div className="col ">
                        <EventosCercanos/>
                    </div>
                </div>
            </div>

        </div>
    )
}