import { Link } from "react-router-dom";
import DateAndTimePickerComponent from "../components/DateAndTimePickerComponent";
import FormCreateAppointment from "../components/FormCreateAppointment";
import ResumeAppointment from "../components/ResumeAppointment";

import { useState } from "react";
import images from "../assets/img/images";

const dateAndTimePickerComponent = () => {
    return <DateAndTimePickerComponent></DateAndTimePickerComponent>;
};
const formCreateAppointment = () => {
    return <FormCreateAppointment></FormCreateAppointment>;
};
const resumeAppointment = () => {
    return <ResumeAppointment></ResumeAppointment>;
};

function CreateAppointment() {
    const components = [dateAndTimePickerComponent, formCreateAppointment, resumeAppointment];

    const [currentStep, setCurrentStep] = useState(0);

    const handlePreviusComponent = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleNextComponent = () => {
        if (currentStep < components.length) setCurrentStep(currentStep + 1);
    };

    const CurrentComponent = components[currentStep];

    return (
        <>
            <div>
                <div className="global-container">
                    <div className="form-contact-container">
                        <div className="margin-container-form-contact">
                            <CurrentComponent />
                            <div className="button-navigation-container">
                                {currentStep > 0 ? (
                                    <button onClick={handlePreviusComponent} className=" create-appointment-buttons-height cancel-button button">
                                        <img className="image-buttons image-flipped-horizontally" src={images.arrow} alt="" />
                                        Regresar
                                    </button>
                                ) : (
                                    <Link to="/" className="no-underline">
                                        <button className="button cancel-button">Salir</button>
                                    </Link>
                                )}
                                {currentStep === components.length - 1 ? (
                                    <div>
                                        <Link to="/cita-creada" className="no-underline">
                                            <button className="home-button">Crear cita</button>
                                        </Link>
                                    </div>
                                ) : (
                                    <button onClick={handleNextComponent} className=" create-appointment-buttons-height action-button button">
                                        Siguiente
                                        <img className="image-buttons" src={images.arrow} alt="" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateAppointment;
