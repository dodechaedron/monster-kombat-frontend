import React from "react";
import { useNavigate } from "react-router-dom";

const BoostDialog = () => {
    const navigate = useNavigate();
    const handleBoost = () => { navigate("/mine"); };
    return (
        <div className="bottom-sheet-scroll">
            <div className="bs-content">
                <div className="bs-content-image is-boost">
                    <img src="/images/boost/rocket.png" />
                </div>
                <div className="bs-content-title has-top-gap">Boost your profit</div>
                <div className="bs-content-description">
                    Tap the Mining menu to buy upgrades for your exchange
                </div>
                <div className="boost-profit-target">
                    <span>Earn even when offline up to 3 hours</span>
                </div>
                <button className="bottom-sheet-button button button-primary button-large" onClick={handleBoost}>
                    <span>Start mining</span>
                    <img className="coin img-responsive is-28" src="/images/coin64.png" />
                </button>
            </div>
        </div>
    );
};

export default BoostDialog;
