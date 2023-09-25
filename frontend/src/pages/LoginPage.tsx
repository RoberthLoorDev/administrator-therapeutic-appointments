import React from "react";

const LoginPage = () => {
    return (
        <>
            <label>Usuario</label>
            <input type="text" />
            <label>Contraseña</label>
            <input type="text" />

            <button>Iniciar sesion</button>

            <a href="/recuperar-password">¿Has olvidado tu contraseña?</a>
        </>
    );
};

export default LoginPage;
