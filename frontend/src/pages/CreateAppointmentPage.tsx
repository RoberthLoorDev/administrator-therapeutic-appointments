import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import AppointmentData from "../components/AppointmentData";
import axios from "axios";
import { globalURL } from "../config/config";

const CreateAppointmentPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const formData = params.get("formData");
    const formDataJson = formData ? JSON.parse(formData) : null;
    const navigate = useNavigate();

    const handleCreateAppointment = async () => {
        try {
            const response = await axios.post(`${globalURL}/api/appointments/create`, formDataJson);

            if (response.status === 200) {
                // Redirige a la página "/cita-creada" con formDataJson como parámetro
                navigate("/cita-creada", { state: { formData: formDataJson } });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="global-container">
                <div className="created-appointment-container">
                    <h1 className="title-page">
                        {" "}
                        <span className="purple-text">Resumen</span> de la cita
                    </h1>
                    <p className="label-form">Por favor, revise los datos antes de crear la cita. Asegúrese de que los datos son correctos, en caso de no ser así, puede regresar y llenar los datos requeridos.</p>
                    <div className="appointment-data-container">
                        <AppointmentData patient={formDataJson}></AppointmentData>
                    </div>

                    <div className="container-buttons-process-cancel">
                        <button className="button-proceed" onClick={handleCreateAppointment}>
                            Crear cita
                        </button>
                        <Link to={"/"}>
                            <button className="button-back-cancel">Cancelar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAppointmentPage;
