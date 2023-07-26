import React from "react";
import { Link } from "react-router-dom";
import PatientsData from "../components/PatientsData";

function CreatedAppointment() {
    return (
        <div>
            <div className="global-container">
                <div className="form-contact-container">
                    <div className="margin-container-form-contact">
                        <h2 className="h2-page-title">Cita creada correctamente</h2>
                        <PatientsData></PatientsData>
                        <Link to="/">
                            <button>Salir</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatedAppointment;
