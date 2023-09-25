import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppointmentData from "../components/AppointmentData";

const CreatedAppointmentPage = () => {
    const location = useLocation();
    const { formData } = location.state;

    // Ahora puedes acceder a los datos en formData y mostrarlos en esta página

    return (
        <div>
            <h1>CITA CREADA</h1>
            <AppointmentData patient={formData}></AppointmentData>
            <Link to={"/"}>
                <button>Salir</button>
            </Link>
        </div>
    );
};

export default CreatedAppointmentPage;
