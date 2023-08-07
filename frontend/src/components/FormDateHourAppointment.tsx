import axios from "axios";
import { useState, ChangeEvent } from "react";

//get the next 7 days
function FormDateHourAppointment() {
    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);
    const [availableHours, setAvailableHours] = useState<string[][]>([]);

    const getNextDays = () => {
        const today = new Date();
        const nextDays = Array.from({ length: 7 }, (_, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index + 1);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");

            return `${year}-${month}-${Number(day)}`;
        });
        return nextDays;
    };

    const nextDays = getNextDays();

    const handleRadioChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedRadio(event.target.value);

        try {
            const dateParts = event.target.value.split("-");
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]) - 1;
            const day = parseInt(dateParts[2]) - 1;

            const date = new Date(year, month, day);

            const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

            const monthName = meses[date.getMonth()].toLowerCase();
            const monthDay = date.getDate();
            const response = await axios.post("http://localhost:5000/api/appointments/check/appointment", {
                month: monthName,
                monthDay: monthDay,
            });
            const { data } = response;
            console.log("Horas disponibles:", data.data);

            // update the status with the hours available for the selected date
        } catch (error) {
            console.error("Error al obtener las horas disponibles:", error);
            setAvailableHours([]);
        }
    };

    const showHours = () => {
        const hours = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

        const filteredHours = hours.filter((hour) => !availableHours.flat().includes(hour));

        return (
            <>
                {filteredHours.map((hour) => (
                    <label className="label-options" key={hour}>
                        <input type="radio" className="input-radio" name="selectedHour" value={hour} checked={selectedRadio === hour} onChange={() => setSelectedRadio(hour)} />
                        {hour}
                    </label>
                ))}
            </>
        );
    };

    console.log("Fecha seleccionada:", selectedRadio);

    return (
        <>
            <div className="date-hour-container">
                <form action="">
                    <div className="radio-create-appointment">
                        <div className="radio-days">
                            <h3 className="h3-create-appointment">Seleccione un día</h3>
                            {nextDays.map((date) => (
                                <label className="label-options" key={date}>
                                    <input type="radio" className="input-radio" name="selectedDay" value={date} onChange={handleRadioChange} />
                                    {new Date(date).toLocaleDateString("es-ES", {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </label>
                            ))}
                        </div>
                        <div className="radio-hours">
                            <h3 className="h3-create-appointment">Seleccione una hora</h3>
                            {showHours()}
                        </div>
                    </div>
                    <input className="input-submit" type="submit" value="Crear cita" />
                </form>
            </div>
        </>
    );
}

export default FormDateHourAppointment;
