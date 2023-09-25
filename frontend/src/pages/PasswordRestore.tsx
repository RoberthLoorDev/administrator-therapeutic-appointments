import React from "react";
import { Link } from "react-router-dom";

const PasswordRestore = () => {
    return (
        <>
            <label htmlFor="">Ingrese su correo electrónico</label>
            <input type="text" />

            <button>Recuperar contraseña</button>

            <span>Se envió la verificación a su correo electrónico</span>

            <Link to={'/'}>
                <button>Salir</button>
            </Link>
        </>
    );
};

export default PasswordRestore;
