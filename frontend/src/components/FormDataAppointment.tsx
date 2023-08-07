import React from "react";
import { Link } from "react-router-dom";
import AlertComponent from "./AlertComponent";

function FormDataAppointment() {
    return (
        <div hidden>
            <AlertComponent isError={false} message="Jueves, 5 de Julio - 13:00PM"></AlertComponent>

            <form>
                <h3 className="h3-create-appointment">Por favor, llene los siguientes datos</h3>
                <div className="data-user-appointment">
                    <div className="label-input-container">
                        <label className="label-create-appointment">Nombres</label>
                        <input type="text" className="input" />
                    </div>

                    <div className="label-input-container">
                        <label className="label-create-appointment">Apellidos</label>
                        <input type="text" className="input-create-appointment" />
                    </div>

                    <div className="label-input-container">
                        <label className="label-create-appointment">Edad</label>
                        <input type="number" className="input-create-appointment" />
                    </div>

                    <div className="label-input-container">
                        <label className="label-create-appointment">Tipo de terapia (opcional)</label>
                        <input type="text" className="input-create-appointment" />
                    </div>

                    <div className="label-input-container">
                        <label className="label-create-appointment">¿Ha recibido terapia anteriormente? (Si, No)</label>
                        <input type="text" className="input-create-appointment" />
                    </div>
                    <div className="label-input-container">
                        <label className="label-create-appointment">Forma de pago esperada</label>
                        <input type="text" className="input-create-appointment" />
                    </div>
                    <div className="label-textarea-container">
                        <label className="label-create-appointment">Motivo de la consulta</label>
                        <textarea className="textarea-create-appointment" />
                    </div>
                </div>
                <Link to="/created-appointment">
                    <input type="submit" value="Crear cita" className="input-submit" />
                </Link>
            </form>
        </div>
    );
}

export default FormDataAppointment;
