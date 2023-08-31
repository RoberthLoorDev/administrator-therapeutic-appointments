import React from "react";
import PatientsData from "./PatientsData";

const ResumeAppointment = () => {
    return (
        <>
            <div className="resume-container">
                <h2 className="title-page">
                    Resumen de <span className="purple-text">la cita </span>
                </h2>
                <label className="label-form">Por favor, revise los datos antes de crear la cita. Asegúrese de que los datos son correctos, en caso de no ser así, puede regresar y llenar los datos requeridos.</label>
                <PatientsData />

                <div className="buttons-resume-appointment-component">
                    <button className="home-button">Crear cita</button>
                    <button className="button cancel-button">Atrás</button>
                </div>
            </div>
        </>
    );
};

export default ResumeAppointment;
