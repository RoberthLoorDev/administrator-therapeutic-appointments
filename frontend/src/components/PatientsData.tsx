interface PatientsData {
    names: string;
    userIdentification: string;
    typeTherapy: string;
    day: string;
    hour: string;
    reasonForConsultation: string;
}

interface PatientsDataProps {
    patient: PatientsData;
}

function PatientsData({ patient }: PatientsDataProps) {
    return (
        <>
            <div className="container-data">
                <div className="margin-container-data">
                    <span>
                        <b>Paciente: </b>
                        {patient.names}
                    </span>
                    <span>
                        <b>Cédula: </b>
                        {patient.userIdentification}
                    </span>
                    <span>
                        <b>Tipo de terapia: </b>
                        {patient.typeTherapy}
                    </span>
                    <span>
                        <b>Día: </b>
                        {patient.day}
                    </span>
                    <span>
                        <b>Hora de cita: </b>
                        {patient.hour}
                    </span>
                    <span>
                        <b>Motivo de la consulta: </b>
                        {patient.reasonForConsultation}
                    </span>
                </div>
            </div>
        </>
    );
}

export default PatientsData;
