import NabvarComponent from "../components/NabvarComponent";
import { Link } from "react-router-dom";
function CheckAppointment() {
    return (
        <div>
            <NabvarComponent />
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
                                <div className="container-alert">
                                    <div className="alert-div">
                                        <span>Usted no tiene citas pendientes</span>
                                    </div>
                                </div>
                                <Link to="/">
                                    <button>Salir</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckAppointment;
