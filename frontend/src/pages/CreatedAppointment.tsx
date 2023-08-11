import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PatientsData from "../components/PatientsData"; // Asegúrate de que la ruta sea correcta

import { format } from "date-fns"; //format date in text
import { es } from "date-fns/locale"; //format date in text

// Definir tipos para la respuesta de la API
interface AppointmentData {
    _id: string;
    userIdentification: string;
    date: string;
    hour: string;
    typeTherapy: string;
    receivedTherapyBefore: boolean;
    expectedPaymentMethod: string;
    reasonForConsultation: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

interface UserData {
    _id: string;
    names: string;
    lastnames: string;
    identification: string;
    email: string;
    gender: string;
    age: number;
    createdAt: string;
    updatedAt: string;
}

function CreatedAppointment() {
    const [appointmentData, setAppointmentData] = useState<AppointmentData | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [formattedDate, setFormattedDate] = useState("");

    const urlParams = new URLSearchParams(window.location.search);
    const appointmentId = urlParams.get("id");

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/appointments/${appointmentId}`)
            .then((response) => {
                const responseData = response.data;
                const date = new Date(responseData.data.appointment.date);
                const formattedDate = format(date, "dd 'de' MMMM 'del' yyyy", { locale: es });
                setFormattedDate(formattedDate);

                setAppointmentData(responseData.data.appointment);
                setUserData(responseData.data.user);
            })
            .catch((error) => {
                console.error("Error fetching appointment data:", error);
            });
    }, [appointmentId]);

    return (
        <div>
            <div className="global-container">
                <div className="form-contact-container">
                    <div className="margin-container-form-contact">
                        <h2 className="h2-page-title">Cita creada correctamente</h2>
                        {appointmentData && userData && (
                            <PatientsData
                                patient={{
                                    names: userData.names,
                                    userIdentification: appointmentData.userIdentification,
                                    typeTherapy: appointmentData.typeTherapy,
                                    day: formattedDate,
                                    hour: appointmentData.hour,
                                    reasonForConsultation: appointmentData.reasonForConsultation,
                                }}
                            />
                        )}
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
