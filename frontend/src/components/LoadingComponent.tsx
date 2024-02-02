import Lottie from "lottie-react";
import React from "react";
import images from "../assets/img/images";

const LoadingComponent = () => {
    return (
        <div className="animation-loading-container">
            <Lottie className="loading-icon" animationData={images.loading}></Lottie>
            <p className="loading-text">Cargando</p>
        </div>
    );
};

export default LoadingComponent;
