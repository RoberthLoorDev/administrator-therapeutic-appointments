import { Link } from "react-router-dom";
import images from "../assets/img/images";

function NabvarComponent() {
    return (
        <>
            <section className="navbar-section">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <div className="logo-title">
                        <img src={images.image_logo} alt="logo" className="image-logo" />
                        <span>CONSULTORIO TOAINGA</span>
                    </div>
                </Link>
                <div className="options-navbar">
                    <span className="text-light">Sobre mí</span>
                    <Link to={"/login"}>
                        <span className="text-light text-underline">Iniciar sesión</span>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default NabvarComponent;
