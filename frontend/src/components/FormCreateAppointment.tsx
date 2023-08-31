import React from "react";
import images from "../assets/img/images";
import { Link } from "react-router-dom";

const FormCreateAppointment = () => {
    return (
        <>
            <h2 className="title-page">
                Complete el <span className="purple-text">formulario</span>{" "}
            </h2>
            <label className="label-form">Llene los datos para completar el proceso de creación de la cita</label>

            <form className="form-create-appointment">
                <div className="label-input">
                    <label className="label-form">Nombres:</label>
                    <input className="input-text-form-style" type="text" />
                </div>

                <div className="label-input">
                    <label className="label-form">Apellidos:</label>
                    <input className="input-text-form-style" type="text" />
                </div>

                <div className="label-input">
                    <label className="label-form">Edad:</label>
                    <input className="input-text-form-style input-number-form-style" type="number" />
                </div>

                <div className="label-input">
                    <label className="label-form">Cedula:</label>
                    <input className="input-text-form-style" type="text" />
                </div>

                <div className="label-input">
                    <label className="label-form">Género:</label>
                    <select name="" id="">
                        <option value=""> </option>
                        <option value="">Masculino</option>
                        <option value="">Femenino</option>
                    </select>
                </div>

                <div className="label-input">
                    <label className="label-form">Numero de teléfono</label>
                    <input type="number" className="input-text-form-style input-number-form-style " />
                </div>

                <div className="line-horizontal"></div>
                <div className="label-input">
                    <label className="label-form">Tipo de terapia:</label>
                    <input className="input-text-form-style" type="text" />
                </div>

                <div className="label-input">
                    <label className="label-form">¿Ha recibido terapia anteriormente?:</label>
                    <input className="input-text-form-style" type="text" />
                </div>
                <div className="label-input">
                    <label className="label-form">Forma de pago esperada:</label>

                    <select name="" id="" className="way-to-pay">
                        <option value="">Efectivo</option>
                        <option value="">Transferencia</option>
                    </select>
                </div>
                <div className="label-input">
                    <label className="label-form">Motivo de la consulta</label>
                    <textarea></textarea>
                </div>
            </form>
        </>
    );
};

export default FormCreateAppointment;
