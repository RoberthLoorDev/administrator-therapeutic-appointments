import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PatientsData from "../components/PatientsData";
import AlertComponent from "../components/AlertComponent";

function CheckAppointment() {
    const [userIdentification, setUserIdentification] = useState("");
    const [patientData, setPatientData] = useState<any>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isError, setIsError] = useState(Boolean);

    const handleForSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:5000/api/appointments/consult/${userIdentification}`);
            const { data } = response;

            const selectedData = {
                id: `${data.data.appointment._id}`,
                names: `${data.data.userData.names} ${data.data.userData.lastnames}`,
                userIdentification: data.data.userData.identification,
                typeTherapy: data.data.appointment.typeTherapy,
                day: `${data.data.appointment.weekDay} ${data.data.appointment.monthDay} de ${data.data.appointment.month} del 2023 `,
                hour: data.data.appointment.hour,
                reasonForConsultation: data.data.appointment.reasonForConsultation,
            };
            if (selectedData.userIdentification < 10) {
                setIsError(true);
                setAlertMessage("Por favor, ingrese un número de cédula correcto");
                setShowAlert(true);
            } else {
                setShowAlert(false);
                setAlertMessage("");
                setPatientData(selectedData);
            }
        } catch (e: any) {
            setIsError(true);
            setShowAlert(true);
            setAlertMessage("Por favor, ingrese un número de cédula correcto");
            setPatientData(null);
        }
    };

    const handleEliminateAppointment = async () => {
        try {
            if (!patientData) {
                setIsError(true);
                setAlertMessage("Por favor, ingrese un número de cédula correcto");
                setShowAlert(true);
            } else {
                await axios.get(`http://localhost:5000/api/appointments/delete/${patientData.id}`);

                // Mostrar un mensaje de éxito en lugar de error
                setIsError(false);
                setShowAlert(true);
                setAlertMessage("¡La cita se eliminó con éxito!");
                setPatientData(null);
            }
        } catch (error) {
            console.log(error);
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
                                        maxLength={10}
                                        value={userIdentification}
                                        onChange={(e) => {
                                            setUserIdentification(e.target.value);
                                        }}
                                    />
                                    <input type="submit" value="Consultar" className="input-submit" />
                                </div>
                                {showAlert === true ? <AlertComponent message={alertMessage} isError={isError} /> : patientData && <PatientsData patient={patientData} />}
                                <div className="buttons-exit-eliminate">
                                    <Link to="/">
                                        <button>Salir</button>
                                    </Link>
                                    <button type="button" className="eliminate-appointment-button" onClick={handleEliminateAppointment}>
                                        Eliminar Cita
                                    </button>
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
