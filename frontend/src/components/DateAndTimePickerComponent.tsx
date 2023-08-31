import React from "react";
import images from "../assets/img/images";

const DateAndTimePickerComponent = () => {
    return (
        <>
            <h2 className="title-page">
                Seleccione el día de <span className="purple-text">la consulta</span>
            </h2>

            <div className="buttons-date-hour-container">
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
                <button className="button-select-day-hour action-button button">Miercoles, 24 de noviembre</button>
            </div>
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

            <div className="container-buttons-create-appointment">
                <button className=" create-appointment-buttons-height cancel-button button">
                    <img className="image-buttons image-flipped-horizontally" src={images.arrow} alt="" />
                    Regresar
                </button>
                <button className=" create-appointment-buttons-height action-button button">
                    Siguiente
                    <img className="image-buttons" src={images.arrow} alt="" />
                </button>
            </div>
        </>
    );
};

export default DateAndTimePickerComponent;
