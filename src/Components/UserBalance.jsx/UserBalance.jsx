/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export const UserBalance = ({ point, pointPerClick }) => {

    const [currentPoint, setCurrentPoint] = useState(point);

    const pointRef = useRef({
        value: point
    });

    useEffect(() => {
        setCurrentPoint(prev => {
            pointRef.current.value = prev;
            return point;
        });
    }, [point])

    return (
        <div className="user-balance-large" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }}>
            <div className="user-balance-large-inner">
                <div className="user-balance-image">
                    <img className="coin img-responsive is-60" src="/images/coin64.png" />
                </div>
                <CountUp
                    start={pointRef.current.value}
                    end={currentPoint}
                    duration={1}
                    decimal=","
                >
                    {({ countUpRef }) => (
                        <p ref={countUpRef} />
                    )}
                </CountUp>
            </div>
        </div>
    )
}