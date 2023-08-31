import React from "react";
import PatientsData from "../components/PatientsData";
import { Link } from "react-router-dom";

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

                        <input type="submit" className="button action-button" value="Consultar" />
                    </form>

                    <PatientsData />

                    <div className="button-leave-check-appointment">
                        <Link to="/" className="no-underline">
                            <button className="cancel-button button">Salir</button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CheckAppointment;
