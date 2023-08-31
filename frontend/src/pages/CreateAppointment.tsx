import { Link } from "react-router-dom";
import FormDataAppointment from "../components/FormDataAppointment";
import DateAndTimePickerComponent from "../components/DateAndTimePickerComponent";
import FormCreateAppointment from "../components/FormCreateAppointment";
import ResumeAppointment from "../components/ResumeAppointment";

function CreateAppointment() {
    return (
        <>
            <div>
                <div className="global-container">
                    <div className="form-contact-container">
                        <div className="margin-container-form-contact">
                            {/* <FormDataAppointment></FormDataAppointment> */}
                            {/* <DateAndTimePickerComponent></DateAndTimePickerComponent> */}
                            {/* <FormCreateAppointment /> */}
                            <ResumeAppointment></ResumeAppointment>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateAppointment;
