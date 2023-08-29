import images from "../assets/img/images";

function NabvarComponent() {
    return (
        <>
            <section className="navbar-container">
                <img src={images.page_logo} alt="logo" className="image-logo" />
                <span>Toainga Sitio Web</span>
                <span>Sobre mí</span>
                <span>Iniciar sesión</span>
                <span></span>
            </section>
        </>
    );
}

export default NabvarComponent;
