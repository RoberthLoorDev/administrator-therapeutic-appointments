import React, { useEffect, useState } from "react";
import { format, addDays } from "date-fns";
import { es } from "date-fns/locale";

const DateAndTimePickerComponent = () => {
    const [selectedDate, setSelectedDate] = useState<string>();

    //use effect that shows the next days
    useEffect(() => {
        generateNextDays();
    }, []);

    const generateNextDays = () => {
        const currentDate = new Date();
        const arrayButtons = [];

        for (let i = 1; i < 8; i++) {
            const date = addDays(currentDate, i); //generate next 7 days
            const formatDate = format(date, "EEEE, dd 'de' MMMM", { locale: es }); //format in spanish
            const formattedDate = formatDate.charAt(0).toUpperCase() + formatDate.slice(1);

            const recordDate = format(date, "dd-MM-yyyy"); //date to schedule appointment in correct format

            const button = (
                <button key={i} className="button-select-day-hour action-button button" onClick={() => handleSelectedDate(recordDate)} value={recordDate}>
                    {formattedDate}
                </button>
            );

            arrayButtons.push(button);
        }
        return arrayButtons;
    };

    //stores the selected date
    const handleSelectedDate = (dateString: string) => {
        setSelectedDate(dateString);
    };

    return (
        <>
            <h2 className="title-page">
                Seleccione el día de <span className="purple-text">la consulta</span>
            </h2>

            <div className="buttons-date-hour-container">{generateNextDays()}</div>
            <h2 className="title-page">
                Seleeccione la <span className="purple-text">hora deseada</span>
            </h2>
            <div className="buttons-date-hour-container">
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
                <button className="button-select-day-hour action-button button">10:00PM</button>
            </div>
        </>
    );
};

export default DateAndTimePickerComponent;
