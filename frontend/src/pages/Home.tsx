//components
import images from "../assets/img/images";
import NabvarComponent from "../components/NabvarComponent";

import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NabvarComponent></NabvarComponent>
            <section className="header-section-home home-container">
                <div className="h1-buttons">
                    <h1 className="h1-header-home">
                        Cree y consulte su cita desde <br /> <span className="purple-text"> su hogar </span>
                    </h1>

                    <div className="header-home-buttons">
                        <Link to={"/crear-cita"} className="no-underline">
                            <button className="home-button">
                                <img className="image-buttons" src={images.icon_create_appointment} alt="" />
                                Crear cita
                            </button>
                        </Link>
                        <Link to={"consultar-cita"} className="no-underline">
                            <button className="home-button">
                                <img className="image-buttons" src={images.icon_search} alt="" />
                                Consultar cita
                            </button>
                        </Link>
                    </div>
                </div>

                <img src={images.image_header_home} alt="image-header" />
            </section>
        </>
    );
}

export default Home;
