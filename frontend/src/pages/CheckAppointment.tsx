import AlertComponent from "../components/AlertComponent";
import NabvarComponent from "../components/NabvarComponent";
import { Link } from "react-router-dom";
import PatientsData from "../components/PatientsData";
function CheckAppointment() {
    return (
        <div>
            <div className="global-container">
                <div className="form-contact-container">
                    <div className="margin-container-form-contact">
                        <div className="containe-check-appointment">
                            <h2>Consultar Cita</h2>
                            <form action="">
                                <label htmlFor="">Ingrese su número de cédula</label>
                                <div className="input-button">
                                    <input type="text" />
                                    <input type="submit" value="Consultar" className="input-submit" />
                                </div>
                                <AlertComponent></AlertComponent>
                                <PatientsData></PatientsData>
                                <div className="buttons-exit-eliminate">
                                    <Link to="/">
                                        <button>Salir</button>
                                    </Link>
                                    <button className="eliminate-appointment-button">Eliminar Cita</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckAppointment;
