import React, { useEffect, useState } from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";
import axios from "axios";

import { APIREST_LINK } from "../config/config";

import { Link } from "react-router-dom";

//loading image library
import Lottie from "lottie-react";
import images from "../assets/img/images";
import LoadingComponent from "../components/LoadingComponent";

const DateAndTimePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<string>();
    const [selectedHour, setSelectedHour] = useState<string>();
    const [avaliableHours, SetavaliableHours] = useState<string[]>([]);
    const [selectedButtonDate, setSelectedButtonDate] = useState<number>(-1);
    const [selectedButtonHour, setSelectedButtonHour] = useState<number>(-1);
    const [isLoading, setIsLoading] = useState(false);

    //use effect that shows the next days
    useEffect(() => {
        generateNextDays();
    }, []);

    //generate the date buttons
    const generateNextDays = () => {
        const currentDate = new Date();
        const arrayButtons = [];

        for (let i = 1; i < 8; i++) {
            const date = addDays(currentDate, i); //generate next 7 days
            const formatDate = format(date, "EEEE, dd 'de' MMMM", { locale: es }); //format in spanish
            const formattedDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);

            const recordDate = format(date, "yyyy-MM-dd"); //date to schedule appointment in correct format

            const button = (
                <button
                    key={i}
                    className={`button-select-day-hour action-button button ${
                        selectedButtonDate === i ? "button-select-day-hour-press" : ""
                    }
                    `}
                    onClick={() => handleSelectedDate(recordDate, i)}
                >
                    {formattedDate}
                </button>
            );

            arrayButtons.push(button);
        }
        return arrayButtons;
    };

    const handleSelectedDate = (dateString: string, buttonIndex: number) => {
        consultHoursAppointment(dateString); //check available hours
        setSelectedDate(dateString); //date to create the appointment
        setSelectedButtonDate(buttonIndex); //selected button

        // console.log(selectedDate);
    };

    //get available hours
    const consultHoursAppointment = async (date: string) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${APIREST_LINK}/api/appointments/check`, {
                date,
            });
            SetavaliableHours(response.data.data.hoursAvaliables);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const generateHoursButtons = () => {
        return avaliableHours.map((hour, index) => (
            <button
                key={index}
                className={`button-select-day-hour action-button button ${
                    selectedButtonHour === index ? "button-select-day-hour-press" : ""
                }
            `}
                onClick={() => handleSelectedHour(hour, index)}
            >
                {hour}
            </button>
        ));
    };

    const handleSelectedHour = (hour: string, index: number) => {
        setSelectedHour(hour); //save hour to create appointment
        setSelectedButtonHour(index); //leave hour button selected

        // console.log(selectedHour);
    };

    return (
        <>
            {isLoading ? <LoadingComponent></LoadingComponent> : ""}
            <div className="content-container">
                <h2 className="title-page">
                    Seleccione el día de <span className="purple-text">la consulta</span>
                </h2>

                <div className="buttons-date-hour-container">{generateNextDays()}</div>

                <div>
                    {selectedDate && (
                        <h2 className="title-page">
                            Seleccione la <span className="purple-text">hora deseada</span>
                        </h2>
                    )}

                    <div className="buttons-date-hour-container">{generateHoursButtons()}</div>
                </div>

                <div className="button-container-process-cancel">
                    <div>
                        <Link to={"/"}>
                            <button className="button-back-cancel">Salir</button>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={{
                                pathname: "/crear-cita/formulario",
                                search: `?selectedDate=${selectedDate}&selectedHour=${selectedHour}`,
                            }}
                        >
                            <button
                                className={
                                    !selectedDate || !selectedHour
                                        ? "button-proceed-disable"
                                        : "button-proceed"
                                }
                                disabled={!selectedDate || !selectedHour}
                            >
                                Siguiente
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DateAndTimePickerComponent;
