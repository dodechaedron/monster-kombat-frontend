/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { TapButton } from '../TapButton/TapButton';
import { LEVEL_DATA } from '../../constants';
import { Link } from 'react-router-dom';
const TapContainer = ({ energy, setEnergy, user, pointPerClick, cipherMode, energyLimit, setCipherText, setCipherMode, skin }) => {

  return (
    <div className="user-tap has-gap" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }}>
      <TapButton
        canIClickPlease={true}
        sleep={false}
        funMode={false}
        clickValue={pointPerClick}
        cooldown={0}
        handleClick={() => { }}
        setEnergy={setEnergy}
        energy={energy}
        user={user}
        energyLimit={energyLimit}
        cipherMode={cipherMode}
        setCipherText={setCipherText}
        setCipherMode={setCipherMode}
        skin={skin}
      />
      <div className="user-tap-animate"></div>
      <div className="user-tap-row">
        <div className="user-tap-energy">
          <div className="icon">
            <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="paint0_linear_603_213" x1="8.50006" y1="-0.000122016"
                  x2="13.5001" y2="35.4999" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FCD924"></stop>
                  <stop offset="1" stopColor="#FF5F1B"></stop>
                </linearGradient>
              </defs>
              <path d="M21.7312 14.6825L7.73123 29.6825C7.58287 29.8408 7.38704 29.9466 7.17329 29.9839C6.95953 30.0211 6.73946 29.9879 6.54627 29.8891C6.35308 29.7903 6.19726 29.6314 6.10233 29.4363C6.00739 29.2412 5.97849 29.0205 6.01999 28.8075L7.85248 19.6412L0.648735 16.9362C0.494024 16.8784 0.356059 16.7831 0.247164 16.6589C0.138268 16.5347 0.0618354 16.3854 0.0246932 16.2245C-0.012449 16.0635 -0.00914339 15.8959 0.0343144 15.7365C0.0777721 15.5772 0.160028 15.431 0.273735 15.3112L14.2737 0.311236C14.4221 0.152905 14.6179 0.047125 14.8317 0.00985718C15.0454 -0.0274107 15.2655 0.00585619 15.4587 0.104638C15.6519 0.203419 15.8077 0.362356 15.9026 0.557463C15.9976 0.75257 16.0265 0.973262 15.985 1.18624L14.1475 10.3625L21.3512 13.0637C21.5048 13.122 21.6417 13.2172 21.7497 13.3409C21.8578 13.4646 21.9337 13.613 21.9707 13.773C22.0078 13.933 22.0049 14.0997 21.9622 14.2583C21.9196 14.417 21.8385 14.5626 21.7262 14.6825H21.7312Z" fill="url(#paint0_linear_603_213)"></path>
            </svg>
          </div>
          <p>{energy} / {energyLimit}</p>
        </div>
        <Link to="/boost" className="user-tap-boost">
          <img src="/images/boost/rocket.png" alt="Boost" />
          <p>Boost</p>
        </Link>
      </div>
    </div>
  )
}


export default TapContainer;