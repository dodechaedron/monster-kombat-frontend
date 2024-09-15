/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../constants";

const ExchangeTaskDialog = ({ setPoint, setUser }) => {

    const navigate = useNavigate();

    const handleChangeExchange = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/task/exchange-change`);
            if (response?.data?.status === 'success') {
                setUser(response?.data?.user);
                setPoint(response?.data?.user?.point);
            }
        }
        catch (e) {
            console.log('app@tgchannel', e.message);
        }
        finally {
            navigate('/settings/exchange');
        }
    }

    return (
        <div className="bottom-sheet-scroll">
            <div className="bs-content">
                <div className="bs-content-image">
                    <div className="earn-image is-coin-star">
                        <img
                            className="img-responsive"
                            src="/images/marketplaces/marketplace.png"
                        />
                    </div>
                </div>
                <div className="bs-content-title">Choose your exchange</div>
                <div className="bs-content-description"
                    onClick={handleChangeExchange}
                >
                    <button
                        className="button button-primary button-small"
                    >
                        Choose
                    </button>
                </div>
                {/**/}
                <div className="bs-content-info">
                    <div className="price">
                        <div className="price-image">
                            <img
                                className="coin img-responsive is-28"
                                src="/images/coin64.png"
                            />
                        </div>
                        <div className="price-value">+5,000</div>
                    </div>
                </div>
                {/**/}
            </div>
        </div>
    );
};

export default ExchangeTaskDialog;
