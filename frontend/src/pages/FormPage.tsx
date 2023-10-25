import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChangeEvent } from "react";

const FormCreateAppointment = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedDate = params.get("selectedDate");
    const selectedHour = params.get("selectedHour");

    const [formData, setFormData] = useState({
        names: "",
        lastnames: "",
        identification: "",
        age: 0,
        phone: "",
        // email: "",
        gender: "",
        userIdentification: "",
        date: selectedDate,
        hour: selectedHour,
        typeTherapy: "",
        receivedTherapyBefore: false,
        expectedPaymentMethod: "",
        reasonForConsultation: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            userIdentification: prevData.identification,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setFormData((prevData) => ({
            ...prevData,
            userIdentification: prevData.identification,
        }));

        console.log(formData);
    };

    return (
        <div className="content-container">
            <div className="container-form">
                <h2 className="title-page">
                    Complete el <span className="purple-text">formulario</span>{" "}
                </h2>
                <label className="label-form">
                    Llene los datos para completar el proceso de creación de la cita
                </label>

                <form className="form-create-appointment">
                    <div className="label-input">
                        <label className="label-form">Nombres y apellidos:</label>
                        <input
                            required={true}
                            className="input-text-form-style"
                            type="text"
                            name="names"
                            value={formData.names}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* <div className="label-input">
                    <label className="label-form">Apellidos:</label>
                    <input
                        className="input-text-form-style"
                        type="text"
                        name="lastnames"
                        value={formData.lastnames}
                        onChange={handleInputChange}
                    />
                </div> */}

                    <div className="label-input">
                        <label className="label-form">Edad:</label>
                        <input
                            className="input-text-form-style input-number-form-style"
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="label-input">
                        <label className="label-form">Teléfono:</label>
                        <input
                            className="input-text-form-style input-number-form-style"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="label-input">
                        <label className="label-form">Cedula:</label>
                        <input
                            className="input-text-form-style"
                            type="text"
                            name="identification"
                            value={formData.identification}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* <div className="label-input">
                    <label className="label-form">Correo electrónico:</label>
                    <input
                        className="input-text-form-style"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div> */}

                    <div className="label-input">
                        <label className="label-form">Género:</label>
                        <select name="gender" value={formData.gender} onChange={handleInputChange}>
                            <option value=""> </option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>

                    <div className="line-horizontal"></div>
                    <div className="label-input">
                        <label className="label-form">Tipo de terapia:</label>
                        <input
                            className="input-text-form-style"
                            type="text"
                            name="typeTherapy"
                            value={formData.typeTherapy}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="label-input">
                        <label className="label-form">Forma de pago esperada:</label>

                        <select
                            className="way-to-pay"
                            name="expectedPaymentMethod"
                            value={formData.expectedPaymentMethod}
                            onChange={handleInputChange}
                        >
                            <option value="Efectivo">Efectivo</option>
                            <option value="Transferencia">Transferencia</option>
                        </select>
                    </div>
                    <div className="label-input">
                        <label className="label-form lable-textarea">Motivo de la consulta</label>
                        <textarea
                            name="reasonForConsultation"
                            value={formData.reasonForConsultation}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                </form>

                <div className="container-buttons-process-cancel">
                    <Link
                        to={{
                            pathname: "/crear-cita/verificar",
                            search: `?formData=${encodeURIComponent(JSON.stringify(formData))}`,
                        }}
                    >
                        <button className="button-proceed" type="button">
                            Siguiente
                        </button>
                    </Link>

                    <Link to={"/crear-cita/hora-fecha"}>
                        <button className="button-back-cancel">Atrás</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormCreateAppointment;
