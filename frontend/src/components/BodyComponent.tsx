import images from "../assets/img/images";

function NabvarComponent() {
    return (
        <>
            <section className="navbar-container">
                <img src={images.page_logo} alt="logo" className="image-logo" />
                <h2 className="title-nabvar">Terapia Ocupacional</h2>
            </section>
            <section className="image-header">
                <img src={images.image_header} alt="" />
                <div className="text-image-header">
                    <span className="span-title-header">Terapia ocupacional</span>
                    <h1 className="h1-title-header">Licenciado Carlos Toainga</h1>
                    <div className="buttons-header">
                        <button className="button-header">Consultar cita</button>
                        <button className="button-header">Crear cita</button>
                    </div>
                </div>
            </section>

            <section className="form-create-appointment"></section>
        </>
    );
}

export default NabvarComponent;
