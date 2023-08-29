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

    //dejar seleccionado el dia y la hora
    const [selectedDayIndex, setSelectedDayIndex] = useState(-1);
    const [selectedHourIndex, setSelectedHourIndex] = useState(-1);

    //
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            // year: "numeric",
            month: "long",
            day: "numeric",
        };
        const formattedDate = date.toLocaleDateString("es-ES", options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
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

    const handleDateChange = async (dateValue: string, index: number) => {
        setSelectedDayIndex(index);

        const initialAvaliableHours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

        const selectedDateFormat = new Date(dateValue);

        const formattedDate = `${selectedDateFormat.getFullYear()}-${String(selectedDateFormat.getMonth() + 1).padStart(2, "0")}-${String(selectedDateFormat.getDate()).padStart(2, "0")}`;

        setSelectedDate(formattedDate);
        console.log(formattedDate);

        // const formattedDate = selectedDateFormat.toISOString();

        try {
            const response = await axios.post("http://localhost:5000/api/appointments/check/appointment", {
                date: formattedDate,
            });

            const responseData = response.data.data;

            const hoursWithoutAppointment = initialAvaliableHours.filter((hour) => !responseData.includes(hour));

            setAvaliableHours(hoursWithoutAppointment);
            console.log(avaliableHours);
        } catch (error) {
            console.error("Error al obtener horarios disponibles:", error);
        }
    };

    const handleHourSelection = (hour: string, index: number) => {
        setSelectedHour(hour);
        setSelectedHourIndex(index);
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

            console.log(response);

            // console.log("Cita creada:", response.data);
            // Redireccionar a la página de created-appointment con el ID de cita
            // window.location.href = `/created-appointment?id=${createdAppointmentId}`;

            // console.log("Appointment created:", response.data);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    };

    const toBooleanFromSelect = (value: string) => {
        console.log(value);
        const selectResult = value === "true" ? true : false;
        setFormData({
            ...formData,
            receivedTherapyBefore: selectResult,
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        // Para campos de tipo checkbox, el valor será 'on' o 'off'. Utiliza el estado 'checked' para obtener un booleano.
        const inputValue = name === "receivedTherapyBefore" ? value === "true" : value;

        console.log(inputValue);

        setFormData((prevData) => ({
            ...prevData,
            [name]: inputValue,
        }));
    };

    const next7Days = generateNext7Days();

    return (
        <div>
            <h3 className="h3-title-form">Llene los siguientes datos</h3>
            <form className="form-create-appointment" onSubmit={handleFormSubmit}>
                <label>Elija el día de la cita</label>
                <div className="choose-day-hours">
                    {next7Days.map((date, index) => (
                        <button className={`button-create-appointment ${selectedDayIndex === index ? "selected-button" : ""}`} type="button" key={index} onClick={() => handleDateChange(date.toISOString(), index)}>
                            {formatDate(date)}
                        </button>
                    ))}
                </div>

                {/* Mostrar botones de horas disponibles */}
                {avaliableHours.length > 0 ? (
                    <div>
                        <label>Horas disponibles:</label>
                        <div className="choose-day-hours">
                            {avaliableHours.map((hour, index) => (
                                <button
                                    className={`button-create-appointment ${selectedHourIndex === index ? "selected-button" : ""}`}
                                    type="button"
                                    key={index}
                                    onClick={() => {
                                        handleHourSelection(hour, index);
                                    }}
                                >
                                    {hour}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <AlertComponent isError={true} message="Día sin horas disponibles, elija otro día"></AlertComponent>
                )}
                <div className="day-appointment">
                    <p>
                        {selectedDate ? (
                            <>
                                {formatDate(new Date(selectedDate))}
                                <br />
                                {selectedHour}
                            </>
                        ) : (
                            "Fecha no seleccionada"
                        )}
                    </p>
                </div>

                <div className="form-inputs">
                    <div className="label-input">
                        <label>Nombres</label>
                        <input type="text" name="names" value={formData.names} onChange={handleInputChange} required />
                    </div>

                    <div className="label-input">
                        <label>Apellidos</label>
                        <input type="text" name="lastnames" value={formData.lastnames} onChange={handleInputChange} required />
                    </div>

                    <div className="label-input">
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>

                    <div className="label-input">
                        <label>Edad</label>
                        <input type="number" className="input-number-create-appointment" name="age" value={formData.age} onChange={handleInputChange} required />
                    </div>

                    <div className="label-input">
                        <label>Cédula</label>
                        <input type="text" name="identification" maxLength={10} minLength={10} value={formData.identification} onChange={handleInputChange} required />
                    </div>

                    <div className="label-input">
                        <label>Género</label>
                        <select name="gender" className="select-create-appointment" value={formData.gender} onChange={handleInputChange}>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Otro...">Otro...</option>
                        </select>
                    </div>

                    <div className="label-input">
                        <label>Tipo de terapia (Opcional)</label>
                        <input type="text" name="typeTherapy" value={formData.typeTherapy} onChange={handleInputChange} />
                    </div>

                    <div className="label-input">
                        <label>¿Ha recibido terapia anteriormente? </label>
                        <select
                            name="receivedTherapyBefore"
                            onChange={(event) => {
                                const newValue = event.target.value;
                                toBooleanFromSelect(newValue);
                            }}
                            className="select-create-appointment"
                        >
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                    </div>

                    <div className="label-input">
                        <label>Forma de pago esperada</label>
                        <input type="text" name="expectedPaymentMethod" value={formData.expectedPaymentMethod} onChange={handleInputChange} />
                    </div>

                    <div className="label-input">
                        <label>Motivo de la consulta </label>
                        <input required type="text" name="reasonForConsultation" value={formData.reasonForConsultation} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="label-input"></div>

                <div className="buttons-exit-create">
                    <input type="submit" value="Crear cita" className="input-submit" />
                    <Link to="/">
                        <button type="button">Salir</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default FormDataAppointment;
