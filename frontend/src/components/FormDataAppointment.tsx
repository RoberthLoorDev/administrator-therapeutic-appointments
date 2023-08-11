import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertComponent from "./AlertComponent";
import axios from "axios";

function FormDataAppointment() {
    const [selectedDate, setSelectedDate] = useState("");
    const [avaliableHours, setAvaliableHours] = useState([] as string[]);
    const [selectedHour, setSelectedHour] = useState("");
    const [formData, setFormData] = useState({
        names: "",
        lastnames: "",
        identification: "",
        age: 0,
        email: "",
        gender: "",
        userIdentification: "",
        typeTherapy: "",
        receivedTherapyBefore: false,
        expectedPaymentMethod: "",
        reasonForConsultation: "",
    });

    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return date.toLocaleDateString("es-ES", options);
    };

    const generateNext7Days = () => {
        const today = new Date();
        today.setDate(today.getDate() + 1); // Avanzar a mañana
        const days = [];

        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            days.push(nextDay);
        }

        return days;
    };

    const handleDateChange = async (dateValue: string) => {
        const initialAvaliableHours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
        setSelectedDate(dateValue);

        const selectedDateFormat = new Date(dateValue);
        selectedDateFormat.setUTCHours(0, 0, 0, 0); // Ajustar a las 00:00:00 UTC

        const formattedDate = selectedDateFormat.toISOString();

        try {
            const response = await axios.post("http://localhost:5000/api/appointments/check/appointment", {
                date: formattedDate,
            });

            const responseData = response.data.data;
            const hoursWithoutAppointment = initialAvaliableHours.filter((hour) => !responseData.includes(hour));

            setAvaliableHours(hoursWithoutAppointment);

            // console.log(formattedDate);
        } catch (error) {
            console.error("Error al obtener horarios disponibles:", error);
        }
    };

    const handleHourSelection = (hour: string) => {
        setSelectedHour(hour);
    };

    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const appointmentData = {
            ...formData,
            userIdentification: formData.identification,
            date: selectedDate,
            hour: selectedHour,
        };

        try {
            const response = await axios.post("http://localhost:5000/api/appointments/create", appointmentData);
            const createdAppointmentId = response.data.data.appointmentCreated._id;

            // console.log("Cita creada:", response.data);
            // Redireccionar a la página de created-appointment con el ID de cita
            window.location.href = `/created-appointment?id=${createdAppointmentId}`;

            // console.log("Appointment created:", response.data);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;

        // Para campos de tipo checkbox, el valor será 'on' o 'off'. Utiliza el estado 'checked' para obtener un booleano.
        const inputValue = type === "checkbox" ? checked : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };

    const next7Days = generateNext7Days();

    return (
        <div>
            <h2>Llene los datos</h2>
            <form className="form-create-appointment" onSubmit={handleFormSubmit}>
                {next7Days.map((date, index) => (
                    <button className="button-create-appointment" type="button" key={index} onClick={() => handleDateChange(date.toISOString())}>
                        {formatDate(date)}
                    </button>
                ))}

                {/* Mostrar botones de horas disponibles */}
                {avaliableHours.length > 0 && (
                    <div>
                        <p>Horas disponibles:</p>
                        {avaliableHours.map((hour, index) => (
                            <button
                                className={`button-create-appointment`}
                                type="button"
                                key={index}
                                onClick={() => {
                                    handleHourSelection(hour);
                                }}
                            >
                                {hour}
                            </button>
                        ))}
                    </div>
                )}
                <label>Nombres</label>
                <input type="text" name="names" value={formData.names} onChange={handleInputChange} required />

                <label>Apellidos</label>
                <input type="text" name="lastnames" value={formData.lastnames} onChange={handleInputChange} required />

                <label>Email</label>
                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />

                <label>Edad</label>
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />

                <label>Cédula</label>
                <input type="text" name="identification" maxLength={10} minLength={10} value={formData.identification} onChange={handleInputChange} required />

                <label>Sexo</label>
                <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />

                <label>Tipo de terapia (Opcional)</label>
                <input type="text" name="typeTherapy" value={formData.typeTherapy} onChange={handleInputChange} />

                <label>¿Ha recibido terapia anteriormente? </label>
                <input type="checkbox" name="receivedTherapyBefore" checked={formData.receivedTherapyBefore} onChange={handleInputChange} required />

                <label>Forma de pago esperada</label>
                <input type="text" name="expectedPaymentMethod" value={formData.expectedPaymentMethod} onChange={handleInputChange} />

                <label>Motivo de la consulta </label>
                <input required type="text" name="reasonForConsultation" value={formData.reasonForConsultation} onChange={handleInputChange} />
                <input type="submit" value="Enviar" />

                <Link to="/">
                    <button type="button">Salir</button>
                </Link>
            </form>
        </div>
    );
}

export default FormDataAppointment;
