import React from "react";
import {
    BACKEND_URL,
    ENERGY_LIMIT_INCREASE,
    ENERGY_LIMIT_POINT,
    ENERGY_LIMITS,
} from "../../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EnergyLimitDialog = ({
    energyLimit,
    setEnergyLimit,
    point,
    setPoint,
    setEnergy,
    setDialogOpen,
    energyLimitLevel,
    setEnergyLimitLevel,
}) => {
    const navigate = useNavigate();

    const handleUpdateEnergyLimit = async () => {
        if (point < ENERGY_LIMIT_POINT) {
            return false;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/energy-level`);

            const { data } = response;

            const time = new Date().getTime();
            const storeObject = JSON.stringify({
                energy: data?.user?.energyLimit,
                time,
            });
            localStorage.setItem("app@user_energy", storeObject);

            setEnergy(data?.user?.energyLimit);
            setEnergyLimit(data?.user?.energyLimit);
            setEnergyLimitLevel(data?.user?.energyLimitLevel);
            setPoint(data?.user?.point);
            setDialogOpen("");
            navigate("/");
        } catch (e) {
            console.log("apop@setFullEnergy", e.message);
        } finally {
            //
        }
        return false;
    };

    return (
        <div className="bottom-sheet-scroll">
            <div className="bs-content">
                <div className="bs-content-image">
                    <img
                        className="is-coin-star"
                        src="/images/boost/boost-energy.png"
                        alt="BoostMaxTaps"
                    />
                </div>
                <div className="bs-content-title">Energy limit</div>
                <div className="bs-content-description">
                    Increase the amount of energy
                </div>
                <div className="bs-content-target">
                    +{ENERGY_LIMITS[energyLimitLevel + 1].increase} energy points for
                    level {energyLimitLevel + 1}
                </div>
                <div className="bs-content-info">
                    <div className="price">
                        <div className="price-image">
                            <img className="coin img-responsive is-28" src="/images/coin64.png" />
                        </div>
                        <div className="price-value">
                            {new Intl.NumberFormat().format(ENERGY_LIMITS[energyLimitLevel + 1].point)}
                        </div>
                    </div>
                    <span>&nbsp;• {energyLimitLevel + 1} lvl</span>
                </div>
                <button
                    className="bottom-sheet-button button button-primary button-large"
                    onClick={handleUpdateEnergyLimit}
                >
                    <span>Go ahead</span>
                </button>
            </div>
        </div>
    );
};

export default EnergyLimitDialog;
