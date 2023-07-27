import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PatientsData from "../components/PatientsData";
import AlertComponent from "../components/AlertComponent";
function CheckAppointment() {
    const [userIdentification, setUserIdentification] = useState("");
    const [patientData, setPatientData] = useState<any>(null);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleForSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/appointments/consult/${userIdentification}`);
            const { data } = response;
            console.log(data.status);

            //data selection
            const selectedData = {
                names: `${data.data.userData.names} ${data.data.userData.lastnames}`,
                userIdentification: data.data.userData.identification,
                typeTherapy: data.data.appointment.typeTherapy,
                day: `${data.data.appointment.weekDay} ${data.data.appointment.monthDay} de ${data.data.appointment.month} del 2023 `,
                hour: data.data.appointment.hour,
                reasonForConsultation: data.data.appointment.reasonForConsultation,
            };

            setHasError(false);
            setErrorMessage("");
            setPatientData(selectedData);
            //
        } catch (e: any) {
            // console.log(error);
            setHasError(true);
            setErrorMessage(e.response.data.message);
            setPatientData(null);
        }
    };

    return (
        <div>
            <div className="global-container">
                <div className="form-contact-container">
                    <div className="margin-container-form-contact">
                        <div className="containe-check-appointment">
                            <h2 className="h2-page-title">Consultar Cita</h2>
                            <form onSubmit={handleForSubmit}>
                                <label htmlFor="">Ingrese su número de cédula</label>
                                <div className="input-button">
                                    <input
                                        type="text"
                                        value={userIdentification}
                                        onChange={(e) => {
                                            setUserIdentification(e.target.value);
                                        }}
                                    />
                                    <input type="submit" value="Consultar" className="input-submit" />
                                </div>
                                {hasError === true ? <AlertComponent message={errorMessage}></AlertComponent> : patientData && <PatientsData patient={patientData} />}
                                <div className="buttons-exit-eliminate">
                                    <Link to="/">
                                        <button>Salir</button>
                                    </Link>
                                    <button className="eliminate-appointment-button">Eliminar Cita</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckAppointment;
