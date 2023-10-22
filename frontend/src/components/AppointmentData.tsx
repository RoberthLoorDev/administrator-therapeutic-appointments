import { format } from "date-fns";
import { es } from "date-fns/locale";

interface AppointmentData {
    names: string;
    lastnames: string;
    age: number;
    date: Date;
    hour: string;
    userIdentification: string;
    gender: string;
    typeTherapy: string;
    receivedTherapyBefore: boolean;
    expectedPaymentMethod: string;
    reasonForConsultation: string;
}

interface AppointmentDataProps {
    patient: AppointmentData;
}

function AppointmentData({ patient }: AppointmentDataProps) {
    const formatDate = (date: Date): string => {
        const formattedDate = new Date(date);
        formattedDate.setTime(formattedDate.getTime() + formattedDate.getTimezoneOffset() * 60 * 1000); // Ajustar la zona horaria
        return format(formattedDate, "dd 'de' MMMM 'del' yyyy", { locale: es });
    };

    return (
        <div className="container-data-appointment">
            <div className="container-data-patient">
                <span className="span-data-appointment">
                    <b>Paciente: </b>
                    <span className="span-data-appointment">{`${patient.names} ${patient.lastnames}`}</span>
                </span>
                <span className="span-data-appointment">
                    <b>Edad: </b>
                    <span className="span-data-appointment">{patient.age}</span>
                </span>
                <span className="span-data-appointment">
                    <b>Cédula: </b>
                    <span className="span-data-appointment">{patient.userIdentification}</span>
                </span>
                <span className="span-data-appointment">
                    <b>genero: </b>
                    <span className="span-data-appointment"> {patient.gender} </span>
                </span>
                <span className="span-data-appointment">
                    <b>Tipo de terapia: </b>
                    <span className="span-data-appointment">{patient.typeTherapy}</span>
                </span>
                <span className="span-data-appointment">
                    <b>Día: </b>
                    <span className="span-data-appointment">{formatDate(patient.date)}</span>
                </span>
                <span className="span-data-appointment">
                    <b>Hora de cita: </b>
                    <span className="span-data-appointment">{patient.hour}</span>
                </span>
                <span className="span-data-appointment">
                    <b>Motivo de la consulta: </b>
                    <span className="span-data-appointment">{patient.reasonForConsultation}</span>
                </span>
            </div>
        </div>
    );
}

export default AppointmentData;
