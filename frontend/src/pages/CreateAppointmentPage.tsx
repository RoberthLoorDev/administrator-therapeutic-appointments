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
                    <h1>Resumen de la cita</h1>
                    <p>Por favor, revise los datos antes de crear la cita. Asegúrese de que los datos son correctos, en caso de no ser así, puede regresar y llenar los datos requeridos.</p>
                    <AppointmentData patient={formDataJson}></AppointmentData>

                    <button onClick={handleCreateAppointment}>Crear cita</button>
                    <Link to={"/"}>
                        <button>Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CreateAppointmentPage;
