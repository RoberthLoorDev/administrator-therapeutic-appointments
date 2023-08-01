// AlertComponent.js
import React from "react";

interface AlertComponentProps {
    message: string;
    isError: boolean;
}

function AlertComponent({ message, isError }: AlertComponentProps) {
    const alertClassName = isError ? "alert-div-error" : "alert-div-success";

    return (
        <div className="container-alert">
            <div className={alertClassName}>
                <span className="text-alert">{message}</span>
            </div>
        </div>
    );
}

export default AlertComponent;
