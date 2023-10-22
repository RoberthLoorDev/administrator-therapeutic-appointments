import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import AppointmentData from "../components/AppointmentData";
import { globalURL } from "../config/config";

const CheckAppointment = () => {
    const [userId, setUserId] = useState("");
    const [appointmentData, setAppointmentData] = useState<null | AppointmentData>(null);

    const consultAppointmentByUserIdentification = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${globalURL}/api/appointments/consult/${userId}`);

            //consulted information
            const userDataConsulted = response.data.data.userData;
            const appointmentDataConsulted = response.data.data.appointment;

            setAppointmentData({
                names: userDataConsulted.names,
                lastnames: userDataConsulted.lastnames,
                age: userDataConsulted.age,
                date: appointmentDataConsulted.date,
                hour: appointmentDataConsulted.hour,
                userIdentification: appointmentDataConsulted.userIdentification,
                gender: userDataConsulted.gender,
                typeTherapy: appointmentDataConsulted.typeTherapy,
                receivedTherapyBefore: appointmentDataConsulted.receivedTherapyBefore,
                expectedPaymentMethod: appointmentDataConsulted.expectedPaymentMethod,
                reasonForConsultation: appointmentDataConsulted.reasonForConsultation,
            });

            console.log(appointmentData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="global-container-check-appointment">
                <section className="check-appointment-container">
                    <h2 className="title-page">
                        Consultar <span className="purple-text">cita</span>
                    </h2>
                    <label className="label-form">Ingrese su numero de cedula</label>
                    <form
                        className="check-appointment-form"
                        onSubmit={consultAppointmentByUserIdentification}
                    >
                        <label>
                            <input
                                type="text"
                                className="input-text-form-style"
                                value={userId}
                                onChange={(event) => {
                                    setUserId(event.target.value);
                                }}
                            />
                        </label>
                        <button type="submit" className="button action-button">
                            Consultar
                        </button>
                    </form>

                    {appointmentData && <AppointmentData patient={appointmentData}></AppointmentData>}

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
