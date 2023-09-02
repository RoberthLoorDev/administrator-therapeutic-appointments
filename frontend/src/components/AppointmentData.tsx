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
        <>
            <div className="container-data-patient">
                <span>
                    <b>Paciente: </b>
                    <span>{`${patient.names} ${patient.lastnames}`}</span>
                </span>
                <span>
                    <b>Edad: </b>
                    <span>{patient.age}</span>
                </span>
                <span>
                    <b>Cédula: </b>
                    <span>{patient.userIdentification}</span>
                </span>
                <span>
                    <b>genero: </b>
                    <span> {patient.gender} </span>
                </span>
                <span>
                    <b>Tipo de terapia: </b>
                    <span>{patient.typeTherapy}</span>
                </span>
                <span>
                    <b>Día: </b>
                    <span>{formatDate(patient.date)}</span>
                </span>
                <span>
                    <b>Hora de cita: </b>
                    <span>{patient.hour}</span>
                </span>
                <span>
                    <b>Motivo de la consulta: </b>
                    <span>{patient.reasonForConsultation}</span>
                </span>
            </div>
        </>
    );
}

export default AppointmentData;
