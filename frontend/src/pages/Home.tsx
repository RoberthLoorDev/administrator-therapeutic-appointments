import images from "../assets/img/images";
import NabvarComponent from "../components/NabvarComponent";

import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="nabvar-container">
                <NabvarComponent></NabvarComponent>
            </div>
            <section className="header-section-home home-container">
                <div className="h1-buttons">
                    <h1 className="h1-header-home">
                        Cree y consulte su cita desde <span className="purple-text"> su hogar </span>
                    </h1>

                    <div className="header-home-buttons">
                        <Link to={"/crear-cita/hora-fecha"} className="no-underline">
                            <button className="home-button">Crear cita</button>
                        </Link>
                        <Link to={"consultar-cita"} className="no-underline">
                            <button className="home-button">Consultar cita</button>
                        </Link>
                    </div>
                </div>

                <img className="image-header" src={images.image_header_home} alt="image-header" />
            </section>
        </>
    );
}

export default Home;
