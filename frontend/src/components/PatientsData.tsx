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

function PatientsData() {
    return (
        <>
            <div className="container-data-patient">
                <span>
                    <b>Paciente: </b>
                    <span>Loor Gimenez Roberth</span>
                </span>{" "}
                <span>
                    <b>Edad: </b>
                    <span>25</span>
                </span>
                <span>
                    <b>Cédula: </b>
                    <span>Hola</span>
                </span>
                <span>
                    <b>genero: </b>
                    <span>Masculino</span>
                </span>
                <span>
                    <b>Tipo de terapia: </b>
                    <span>Tipo de terapia</span>
                </span>
                <span>
                    <b>Día: </b>
                    <span>23 de agosto del 2023</span>
                </span>
                <span>
                    <b>Hora de cita: </b>
                    <span>14:00</span>
                </span>
                <span>
                    <b>Motivo de la consulta: </b>
                    <span>Dolor en la espalda baja</span>
                </span>
            </div>
        </>
    );
}

export default PatientsData;
