import React from "react";
import PatientsData from "../components/PatientsData";

const CheckAppointment = () => {
    return (
        <>
            <div className="global-container">
                <section className="check-appointment-container">
                    <h2 className="title-page">
                        Consultar <span className="purple-text">cita</span>
                    </h2>
                    <label className="label-form">Ingrese su numero de cedula</label>
                    <form className="check-appointment-form">
                        <input type="text" className="input-text-form-style" />

                        <div className="button-container">
                            <input type="submit" className="button action-button" value="Consultar" />
                        </div>
                    </form>

                    <PatientsData />
                </section>
            </div>
        </>
    );
};

export default CheckAppointment;
