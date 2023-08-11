import { Link } from "react-router-dom";
import FormDataAppointment from "../components/FormDataAppointment";

function CreateAppointment() {
    return (
        <>
            <div>
                <div className="global-container">
                    <div className="form-contact-container">
                        <div className="margin-container-form-contact">
                            <h2 className="h2-page-title">Crear cita</h2>
                            <FormDataAppointment></FormDataAppointment>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateAppointment;
