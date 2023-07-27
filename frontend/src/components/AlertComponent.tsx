// AlertComponent.js
import React from "react";

interface AlertComponentProps {
    message: string;
}

function AlertComponent({ message }: AlertComponentProps) {
    console.log(message);
    return (
        <div className="container-alert">
            <div className="alert-div">
                <span>{message}</span>
            </div>
        </div>
    );
}

export default AlertComponent;
