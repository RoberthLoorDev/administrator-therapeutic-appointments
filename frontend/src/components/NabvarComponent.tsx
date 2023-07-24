import images from "../assets/img/images";

function NabvarComponent() {
    return (
        <>
            <section className="navbar-container">
                <img src={images.page_logo} alt="logo" className="image-logo" />
                <h2 className="title-nabvar">Terapia Ocupacional</h2>
            </section>

        </>
    );
}

export default NabvarComponent;
