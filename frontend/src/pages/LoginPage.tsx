import React from "react";

const LoginPage = () => {
    return (
        <>
            <div className="login-global-container">
                <div className="form-login-container">
                    <div className="label-input">
                        <label className="label-form">Usuario</label>
                        <input className="input-text-form-style width-100" type="text" />
                        <label className="label-form">Contraseña</label>
                        <input className="input-text-form-style width-100" type="text" />
                        <button className="button-proceed width-button-login">Iniciar sesion</button>
                        <div className="forget-your-password">
                            <a href="/recuperar-password">¿Has olvidado tu contraseña?</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
