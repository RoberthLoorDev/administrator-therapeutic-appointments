//images
import images from "../assets/img/images";

//components
import NabvarComponent from "../components/NabvarComponent";

import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <NabvarComponent></NabvarComponent>
            <section className="image-header">
                <img src={images.image_header} alt="" />
                <div className="text-image-header">
                    <span className="span-title-header">Terapia ocupacional</span>
                    <h1 className="h1-title-header">Licenciado Carlos Toainga</h1>
                    <div className="buttons-header">
                        <Link to="/consultar-cita">
                            <button className="button-header">Consultar cita</button>
                        </Link>
                        <button className="button-header">Crear cita</button>
                    </div>
                </div>
            </section>

            <section className="form-create-appointment"></section>
        </>
    );
}

export default Home;
