import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppointmentData from "../components/AppointmentData";

const CreatedAppointmentPage = () => {
    const location = useLocation();
    const { formData } = location.state;

    // Ahora puedes acceder a los datos en formData y mostrarlos en esta página

    return (
        <div className="resume-container">
            <h1 className="title-page">
                {" "}
                <span className="purple-text">CITA</span> CREADA!
            </h1>
            <div className="label-form">
                Usted acaba de crear una cita para terapia ocupacional con los siguientes datos:
            </div>
            <div className="appointment-data-container">
                <AppointmentData patient={formData}></AppointmentData>
            </div>
            <div className="container-buttons-process-cancel">
                <Link to={"/"}>
                    <button className="button-back-cancel">Salir</button>
                </Link>
            </div>
        </div>
    );
};

export default CreatedAppointmentPage;
