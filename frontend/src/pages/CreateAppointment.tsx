import NabvarComponent from "../components/NabvarComponent";
import { Link } from "react-router-dom";

function CreateAppointment() {
    return (
        <>
            <div>
                <div className="global-container">
                    <div className="form-contact-container">
                        <div className="margin-container-form-contact">
                            <h2 className="h2-page-title">Crear cita</h2>
                            <form>
                                <h3 className="h3-create-appointment">Seleccione un día</h3>
                                <div className="buttons-create-appointment">
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                    <button className="button-create-appointment">Lunes, 27 de Julio</button>
                                </div>
                                <h3 className="h3-create-appointment">Seleccione un horaio - Lunes, 27 de Julio</h3>
                                <div className="buttons-create-appointment">
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                    <button className="button-create-appointment">15:00 PM - 16:00 PM</button>
                                </div>

                                <h3 className="h3-create-appointment">Por favor, llene los siguientes datos</h3>
                                <div className="data-user-appointment">
                                    <div className="label-input-container">
                                        <label className="label-create-appointment">Nombres</label>
                                        <input type="text" className="input" />
                                    </div>

                                    <div className="label-input-container">
                                        <label className="label-create-appointment">Apellidos</label>
                                        <input type="text" className="input-create-appointment" />
                                    </div>

                                    <div className="label-input-container">
                                        <label className="label-create-appointment">Edad</label>
                                        <input type="number" className="input-create-appointment" />
                                    </div>

                                    <div className="label-input-container">
                                        <label className="label-create-appointment">Tipo de terapia (opcional)</label>
                                        <input type="text" className="input-create-appointment" />
                                    </div>

                                    <div className="label-input-container">
                                        <label className="label-create-appointment">¿Ha recibido terapia anteriormente? (Si, No)</label>
                                        <input type="text" className="input-create-appointment" />
                                    </div>
                                    <div className="label-input-container">
                                        <label className="label-create-appointment">Forma de pago esperada</label>
                                        <input type="text" className="input-create-appointment" />
                                    </div>
                                    <div className="label-textarea-container">
                                        <label className="label-create-appointment">Motivo de la consulta</label>
                                        <textarea className="textarea-create-appointment" />
                                    </div>
                                </div>
                                <Link to="/created-appointment">
                                    <input type="submit" value="Crear cita" className="input-submit" />
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateAppointment;
