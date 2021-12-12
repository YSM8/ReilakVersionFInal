import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

import { Bar, Pie } from 'react-chartjs-2';

import { eventsStartLoading } from "../../actions/eventos";
import {
    dashboardRadioCantidadEdad,
    dashboardRadioCantidadArea,
    dashboardRadioCantidadRol,
    dashboardRadioPublicacionesCategoria,
    dashboardRadioPublicacionesFecha,
    dashboardRadioPublicacionesUsuarios,
    dashboardRadioEventoCategoria,
    dashboardRadioEventoFecha,
    dashboardRadioEventosUsuarios,
    dashboardRadioCanalesUsuarios,
    dashboardRadioGruposUsuarios,
    dashboardRadioUsuariosChat

} from "../../actions/dashboardRadios";

//InitEvents
const initEvent = {
    //Opciones
    opcionTablas: 'Publicaciones',
    opcionDashboard: 'Usuarios',
    tabla: '',
    fullscreen: ''
}

export const DashboardScreen = () => {

    //UseDispatch
    const dispatch = useDispatch();

    //UseState
    const [formValues, setFormValues] = useState(initEvent);

    //UseEffect
    useEffect(() => {
        dispatch(eventsStartLoading());
        dispatch(dashboardRadioCantidadEdad());
        dispatch(dashboardRadioCantidadArea());
        dispatch(dashboardRadioCantidadRol());
        dispatch(dashboardRadioPublicacionesCategoria());
        dispatch(dashboardRadioPublicacionesFecha());
        dispatch(dashboardRadioPublicacionesUsuarios());
        dispatch(dashboardRadioEventoCategoria());
        dispatch(dashboardRadioEventoFecha());
        dispatch(dashboardRadioEventosUsuarios());
        dispatch(dashboardRadioCanalesUsuarios());
        dispatch(dashboardRadioGruposUsuarios());
        dispatch(dashboardRadioUsuariosChat());
        setFormValues(initEvent);
    }, [setFormValues])

    //UseSelector
    const { events } = useSelector(state => state.events);
    const {
        rcantidadedad,
        rcantidadarea,
        rcantidadrol,
        rcantidadpublicacionesusuarios,
        rcantidadpublicacionesfecha,
        rcantidadpublicacionescategoria,
        rcantidadeventosusuarios,
        rcantidadeventosfecha,
        rcantidadeventoscategoria,
        rcantidadgruposusuarios,
        rcantidadchatusuarios,
        rcantidadusuarioschat
    } = useSelector(state => state.dashboard);
    //FormValues

    const { opcionDashboard, fullscreen } = formValues;

    //OPT

    const OpcionDashboard = (valor) => {
        console.log(valor);
        if (valor == "Usuarios") {
            console.log(valor);
            setFormValues({
                ...formValues,
                opcionDashboard: "Usuarios"
            });
        }

        if (valor == "Publicaciones") {
            console.log(valor);
            setFormValues({
                ...formValues,
                opcionDashboard: "Publicaciones"
            });
        }

        if (valor == "Eventos") {
            console.log(valor);
            setFormValues({
                ...formValues,
                opcionDashboard: "Eventos"
            });
        }

        if (valor == "Chat") {
            console.log(valor);
            setFormValues({
                ...formValues,
                opcionDashboard: "Chat"
            });
        }

    }

    const Fullscreen = (valor) => {
        console.log(valor);
        if (valor == "Fullscreen") {
            console.log(valor);
            setFormValues({
                ...formValues,
                fullscreen: "Fullscreen"
            });
        }

        if (valor == "NoFullscreen") {
            console.log(valor);
            setFormValues({
                ...formValues,
                fullscreen: "NoFullscreen"
            });
        }
    }

    const handleInputChange = ({ target }) => {
        // dispatch(userFiltroEstado(target.value));
    }

    return (

        <div className="main__home">
            <div className="container__dashboard">
                <div className="dashboard">
                    <div className="header">
                        {(opcionDashboard == "Usuarios") ?
                            <div className="opt seleccionado">
                                <i class="fas fa-users"></i>
                            </div>
                            :
                            <div className="opt" onClick={() => { OpcionDashboard("Usuarios"); }}>
                                <i class="fas fa-users"></i>
                            </div>
                        }
                        {(opcionDashboard == "Publicaciones") ?
                            <div className="opt seleccionado">
                                Publicaciones
                            </div>
                            :
                            <div className="opt" onClick={() => { OpcionDashboard("Publicaciones"); }}>
                                Publicaciones
                            </div>
                        }
                        {(opcionDashboard == "Eventos") ?
                            <div className="opt seleccionado">
                                <i class="far fa-calendar-alt"></i>
                            </div>
                            :
                            <div className="opt" onClick={() => { OpcionDashboard("Eventos"); }}>
                                <i class="far fa-calendar-alt"></i>
                            </div>
                        }
                        {(opcionDashboard == "Chat") ?
                            <div className="opt seleccionado">
                                <i class="fas fa-comments"></i>
                            </div>
                            :
                            <div className="opt" onClick={() => { OpcionDashboard("Chat"); }}>
                                <i class="fas fa-comments"></i>
                            </div>
                        }
                    </div>
                    <div className="body">
                        {(opcionDashboard == "Usuarios") ?
                            <div className="dcontenido">
                                <div className="dprimerarow">
                                    <div className="dapartado">
                                        <div className="dtitulo dtabla">
                                            <div className="opttabla">

                                            </div>
                                            <div className="opttabla">
                                                Tabla de usuarios
                                            </div>
                                            <div className="opttabla">
                                                {(fullscreen == "Fullscreen") ?
                                                    <i class="fas fa-compress" onClick={() => { Fullscreen("NoFullscreen"); }}></i>
                                                    :
                                                    <i class="fas fa-expand 4x" onClick={() => { Fullscreen("Fullscreen"); }}></i>
                                                }
                                            </div>
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Account</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Period</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-label="Account">Visa - 3412</td>
                                                        <td data-label="Due Date">04/01/2016</td>
                                                        <td data-label="Amount">$1,190</td>
                                                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Account">Visa - 6076</td>
                                                        <td data-label="Due Date">03/01/2016</td>
                                                        <td data-label="Amount">$2,443</td>
                                                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Account">Corporate AMEX</td>
                                                        <td data-label="Due Date">03/01/2016</td>
                                                        <td data-label="Amount">$1,181</td>
                                                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Acount">Visa - 3412</td>
                                                        <td data-label="Due Date">02/01/2016</td>
                                                        <td data-label="Amount">$842</td>
                                                        <td data-label="Period">01/01/2016 - 01/31/2016</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Usuarios por edad
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            Usuarios por edad
                                        </div>
                                    </div>
                                </div>
                                <div className="dsegundarow">
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Usuarios por edad
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadedad.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Usuarios por area
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadarea.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Usuarios por rol
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadrol.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                        }
                        {(opcionDashboard == "Publicaciones") ?
                            <div className="dcontenido">
                                <div className="dprimerarow">
                                    <div className="dapartado">
                                        <div className="dtitulo dtabla">
                                            <div className="opttabla">

                                            </div>
                                            <div className="opttabla">
                                                Tabla de publicaciones
                                            </div>
                                            <div className="opttabla">
                                                <i class="fas fa-expand 4x"></i>
                                            </div>
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Account</th>
                                                        <th scope="col">Due Date</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Period</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-label="Account">Visa - 3412</td>
                                                        <td data-label="Due Date">04/01/2016</td>
                                                        <td data-label="Amount">$1,190</td>
                                                        <td data-label="Period">03/01/2016 - 03/31/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Account">Visa - 6076</td>
                                                        <td data-label="Due Date">03/01/2016</td>
                                                        <td data-label="Amount">$2,443</td>
                                                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Account">Corporate AMEX</td>
                                                        <td data-label="Due Date">03/01/2016</td>
                                                        <td data-label="Amount">$1,181</td>
                                                        <td data-label="Period">02/01/2016 - 02/29/2016</td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row" data-label="Acount">Visa - 3412</td>
                                                        <td data-label="Due Date">02/01/2016</td>
                                                        <td data-label="Amount">$842</td>
                                                        <td data-label="Period">01/01/2016 - 01/31/2016</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Publicaciones por fecha
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            Usuarios por edad
                                        </div>
                                    </div>
                                </div>
                                <div className="dsegundarow">
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Publicaiones por usuario
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadpublicacionesusuarios.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Publicaciones por fecha
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadpublicacionesfecha.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Publicaciones por categoria
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadpublicacionescategoria.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                        }
                        {(opcionDashboard == "Eventos") ?
                            <div className="dcontenido">
                                <div className="dprimerarow">
                                    <div className="dapartado">
                                        <div className="dtitulo dtabla">
                                            <div className="opttabla">

                                            </div>
                                            <div className="opttabla">
                                                Tabla de eventos
                                            </div>
                                            <div className="opttabla">
                                                <i class="fas fa-expand 4x"></i>
                                            </div>
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Titulo</th>
                                                        <th scope="col">descripcion</th>
                                                        <th scope="col">start</th>
                                                        <th scope="col">end</th>
                                                        <th scope="col">tipo</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {events.map(({ titulo, id, descripcion, start, end, tipo }, i) =>
                                                        <tr>
                                                            <td data-label="Account">{titulo}</td>
                                                            <td data-label="Due Date">{descripcion}</td>
                                                            <td data-label="Amount">{moment(start).format("DD-MM-yy")}</td>
                                                            <td data-label="Period">{moment(end).format("DD-MM-yy")}</td>
                                                            <td data-label="Period">{tipo}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Usuarios por edad
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            Usuarios por edad
                                        </div>
                                    </div>
                                </div>
                                <div className="dsegundarow">
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Eventos por usuario
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadeventosusuarios.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Eventos por fecha
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadeventosfecha.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Eventos por categoria
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                        }
                        {(opcionDashboard == "Chat") ?
                            <div className="dcontenido">
                                <div className="dprimerarow">
                                    <div className="dapartado">
                                        <div className="dtitulo dtabla">
                                            <div className="opttabla">

                                            </div>
                                            <div className="opttabla">
                                                Tabla de chats
                                            </div>
                                            <div className="opttabla">
                                                <i class="fas fa-expand 4x"></i>
                                            </div>
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            Usuarios por edad
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Chats por mes
                                        </div>
                                        <div className="dsubtitulo">

                                        </div>
                                        <div className="dinfo">
                                            Usuarios por edad
                                        </div>
                                    </div>
                                </div>
                                <div className="dsegundarow">
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Chats grupales por usuario
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadgruposusuarios.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Canales por usuario
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadchatusuarios.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="dapartado">
                                        <div className="dtitulo">
                                            Uduarios por chat
                                        </div>
                                        <div className="dsubtitulo">
                                            <select class="form-control" onChange={handleInputChange} name="estado" id="exampleFormControlSelect2">
                                                <option defaultValue>Seleccione un estado...</option>
                                                <option value="Activo">Activo</option>
                                                <option value="Inactivo">Inactivo</option>
                                            </select>
                                        </div>
                                        <div className="dinfo">
                                            <Pie
                                                data={{
                                                    labels: ['Conectados de la semana', 'Desconectados de la semana'],
                                                    datasets: [{
                                                        label: 'Conexiones',
                                                        data: rcantidadusuarioschat.map(({ _id, conexiones }, i) =>
                                                            [
                                                                conexiones
                                                            ]
                                                        ),
                                                        backgroundColor: [
                                                            'rgba(255, 99, 132, 0.2)',
                                                            'rgba(54, 162, 235, 0.2)',
                                                            'rgba(255, 206, 86, 0.2)',
                                                            'rgba(75, 192, 192, 0.2)',
                                                            'rgba(153, 102, 255, 0.2)',
                                                            'rgba(255, 159, 64, 0.2)',
                                                        ],
                                                        borderColor: [
                                                            'rgba(255, 99, 132, 1)',
                                                            'rgba(54, 162, 235, 1)',
                                                            'rgba(255, 206, 86, 1)',
                                                            'rgba(75, 192, 192, 1)',
                                                            'rgba(153, 102, 255, 1)',
                                                            'rgba(255, 159, 64, 1)',
                                                        ],
                                                    }]

                                                }}
                                                options={{
                                                    layout: {
                                                        padding: 8,

                                                    },
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            ""
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
