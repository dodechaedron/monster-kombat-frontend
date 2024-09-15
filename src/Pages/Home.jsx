import { useContext, useEffect, useState } from "react";
import TapContainer from "../Components/TapContainer/TapContainer";
import { UserBalance } from "../Components/UserBalance.jsx/UserBalance";
import AppBar from "../Components/AppBar";
import { PointContext } from "../state/PointContext";
import BoostDialog from "../Components/BoostDialog/BoostDialog";
import { LEVEL_DATA, TOP_LEVEL } from "../constants";
import { getExchangeIcon } from "./Exchange";
import { Link, useNavigate } from "react-router-dom";
import InitialDialog from "../Components/InitialDialog/InitialDialog";
import moment from "moment";

let comboInterval = 0;
let cipherInterval = 0;

function Home() {
  const navigate = useNavigate();

  const {
    point,
    energy,
    setEnergy,
    user,
    pointPerClick,
    exchange,
    initialized,
    setInitialized,
    energyLimit,
    setEnergyLimit,
    username,
    profitPerHour,
    dailyCombo,
    bonus,
    dailyCipher,
    dailyReward,
    skin
  } = useContext(PointContext);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const [timeComboLeft, setTimeComboLeft] = useState(0);
  const [timeCipherLeft, setTimeCipherLeft] = useState(0);
  const [timeRewardLeft, setTimeRewardLeft] = useState(0);

  const [cipherMode, setCipherMode] = useState(false);
  const [cipherText, setCipherText] = useState("");

  useEffect(() => {
    const _timeComboLeft = new Date(dailyCombo?.limited_at).getTime() - new Date().getTime();

    const _timeCipherLeft = new Date(dailyCipher?.limited_at).getTime() - new Date().getTime();

    const _timeRewardLeft = new Date(dailyReward).getTime() - new Date().getTime();

    setTimeComboLeft(_timeComboLeft / 1000);

    setTimeCipherLeft(_timeCipherLeft / 1000);

    setTimeRewardLeft(_timeRewardLeft / 1000);

    comboInterval = setInterval(() => {
      if (_timeComboLeft <= 0) {
        clearInterval(comboInterval);
        comboInterval = 0;
      }
      setTimeComboLeft(prev => Math.max(prev - 1, 0))
    }, 1000)

    cipherInterval = setInterval(() => {
      if (_timeCipherLeft <= 0) {
        clearInterval(cipherInterval);
        cipherInterval = 0;
      }
      setTimeCipherLeft(prev => Math.max(prev - 1, 0))
    }, 1000)

    if (initialized) {
      setTimeout(() => {
        setInitialized(false);
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const levelProgress = user.level !== TOP_LEVEL ? (user.point - LEVEL_DATA[user.level].point) / (LEVEL_DATA[user.level + 1].point - LEVEL_DATA[user.level].point) : (user.point - LEVEL_DATA[user.level].point) / LEVEL_DATA[user.level].point / 100

  return (
    <div>
      <div className="page">
        <main className="main is-prevent-touch">
          <header className="header">
            <div className="header-left">
              <div className="user-info is-small" onClick={() => { navigate("/skin"); }}>
                <div className="user-info-avatar">
                  <picture>
                    <source srcSet={`/images/hamsters/${user.level}.png`} type="image/png" />
                    <img src={`/images/hamsters/${user.level}.png`} />
                  </picture>
                </div>
                <div className="user-info-avatar-skin">
                  <span>Buy<br />skin</span>
                  <picture>
                    <source srcSet={`/images/skins/skin${user.level}.png`} type="image/png" />
                    <img className="img-responsive" src={`/images/skins/skin${user.level}.png`} />
                  </picture>
                </div>
                <p>{username.toUpperCase()} <span>(CEO)</span></p>
              </div>
            </div>
            {/* <div className="header-right">
              <ul className="header-balances">
                <li className="header-balances-keys">
                  <div className="icon is-key">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16.55 16.87"
                    >
                      <path
                        d="M15.15,2.13c-2-1.61-5.05-.88-6.57.45a4.81,4.81,0,0,0-.86,5.75l-6.13,6a7.18,7.18,0,0,0-.49,2.34l.83.57s1.41.42,2-.05A2.67,2.67,0,0,0,5,15.47a.66.66,0,0,1,.16-.57A.72.72,0,0,1,6,14.79a.66.66,0,0,0,.64-.15l.06-.06a.71.71,0,0,0,.21-.7A1.06,1.06,0,0,1,7.1,13a1,1,0,0,1,.75-.31A1.43,1.43,0,0,0,9,12.26l.9-.87A5.38,5.38,0,0,0,16,10.17C18.05,8,17.53,4,15.15,2.13ZM13.94,6.82a1.47,1.47,0,0,1-2,0,1.4,1.4,0,0,1,0-2,1.47,1.47,0,0,1,2,0A1.4,1.4,0,0,1,13.94,6.82Z"
                        transform="translate(-0.73 -0.56)"
                        style={{ fill: "#9e740b" }}
                      ></path>
                      <path
                        d="M15.16,2.13A5.36,5.36,0,0,0,6.45,8.05L1.1,13.37a1.18,1.18,0,0,0-.28.44,1.13,1.13,0,0,0-.09.51L.79,16c.3.18.31.72.31.72l1.4.1a1.3,1.3,0,0,0,1-.37L3.89,16a1.23,1.23,0,0,0,.36-1.05.68.68,0,0,1,.16-.61.71.71,0,0,1,.74-.12.69.69,0,0,0,.67-.15L5.88,14a.73.73,0,0,0,.22-.72,1.08,1.08,0,0,1,.24-.89,1,1,0,0,1,.75-.31,1.52,1.52,0,0,0,1.16-.46l.84-.84a5.36,5.36,0,0,0,6.07-8.64Zm-1.92,4A1.45,1.45,0,1,1,11.19,4,1.45,1.45,0,0,1,13.24,6.1Z"
                        transform="translate(-0.73 -0.56)"
                        style={{ fill: "#ffca28" }}
                      ></path>
                      <path
                        d="M.79,16s.17.12.31.72L7.78,9.9c.21-.24-.76-.12-1,.17Z"
                        transform="translate(-0.73 -0.56)"
                        style={{ fill: "#dba010" }}
                      ></path>
                      <path
                        d="M8.5,2.8A3.08,3.08,0,0,0,7.16,5.05a3.53,3.53,0,0,0,.27,2.39c.39.69.93.32.72-.35A3,3,0,0,1,8,6a3.32,3.32,0,0,1,.12-1.09,5.71,5.71,0,0,1,1-1.73C9.33,2.83,9,2.54,8.5,2.8ZM4.65,11.21c-.4.34,0-.72.32-1.08A15.3,15.3,0,0,1,6.5,8.57c.23-.11.22.53.12.65A26.42,26.42,0,0,1,4.65,11.21Z"
                        transform="translate(-0.73 -0.56)"
                        style={{ fill: "#fff59d" }}
                      ></path>
                    </svg>
                  </div>
                  <span>6</span>
                  <div className="icon is-10 is-carret">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </li>
              </ul>
            </div> */}
          </header>
          <div className="header-row">
            <div className="header-progress">
              <Link className="user-level" to="/league">
                <div className="user-level-info">
                  <div className="user-level-info-right">
                    <p>{LEVEL_DATA[user.level]?.name}</p>
                    <div className="icon is-10">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                        <path
                          d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="user-level-info-left">
                    <p>
                      {user.level}
                      <span className="text-grey">&nbsp;/ {TOP_LEVEL}</span>
                    </p>
                  </div>
                </div>
                <div className="user-level-progress is-small">
                  <div className="user-level-progress-bar" style={{ width: `${(levelProgress > 1 ? 1 : levelProgress) * 100}%` }} />
                </div>
              </Link>
            </div>
            <div className="header-info">
              <Link className="header-info-exchange" to="/settings/exchange" >
                <div className="exchange-image is-border-6">
                  {getExchangeIcon(exchange)}
                </div>
              </Link>
              <div className="header-info-passive v-popper--has-tooltip">
                <p>Profit per hour</p>
                <div className="header-info-passive-data">
                  <div className="price">
                    <div className="price-image">
                      <img className="coin img-responsive is-18" src="./images/coin64.png" />
                    </div>
                    <div className="price-value">+{new Intl.NumberFormat().format(profitPerHour)}</div>
                  </div>
                  <div className="icon icon-info">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      onClick={() => {
                        setDialogOpen(true);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 0.570312C6.83277 0.570313 5.20298 1.06471 3.81672 1.99097C2.43047 2.91724 1.35001 4.23377 0.711988 5.7741C0.073965 7.31442 -0.092971 9.00935 0.23229 10.6446C0.557552 12.2797 1.3604 13.7818 2.53931 14.9607C3.71823 16.1396 5.22025 16.9425 6.85545 17.2677C8.49065 17.593 10.1856 17.426 11.7259 16.788C13.2662 16.15 14.5828 15.0695 15.509 13.6833C16.4353 12.297 16.9297 10.6672 16.9297 9C16.9273 6.76503 16.0384 4.62228 14.4581 3.04192C12.8777 1.46156 10.735 0.572673 8.5 0.570312ZM8.17579 4.46094C8.36816 4.46094 8.55621 4.51798 8.71616 4.62486C8.87612 4.73174 9.00078 4.88364 9.0744 5.06137C9.14802 5.2391 9.16728 5.43467 9.12975 5.62335C9.09222 5.81203 8.99959 5.98534 8.86356 6.12137C8.72753 6.25739 8.55422 6.35003 8.36554 6.38756C8.17686 6.42509 7.9813 6.40583 7.80357 6.33221C7.62584 6.25859 7.47393 6.13392 7.36705 5.97397C7.26017 5.81402 7.20313 5.62597 7.20313 5.43359C7.20313 5.17563 7.3056 4.92823 7.48801 4.74582C7.67042 4.56341 7.91782 4.46094 8.17579 4.46094ZM9.14844 13.5391C8.80449 13.5391 8.47462 13.4024 8.23141 13.1592C7.9882 12.916 7.85157 12.5861 7.85157 12.2422V9C7.67959 9 7.51466 8.93168 7.39305 8.81008C7.27145 8.68847 7.20313 8.52354 7.20313 8.35156C7.20313 8.17959 7.27145 8.01465 7.39305 7.89305C7.51466 7.77144 7.67959 7.70312 7.85157 7.70312C8.19552 7.70312 8.52538 7.83976 8.76859 8.08297C9.01181 8.32618 9.14844 8.65605 9.14844 9V12.2422C9.32042 12.2422 9.48535 12.3105 9.60696 12.4321C9.72856 12.5537 9.79688 12.7186 9.79688 12.8906C9.79688 13.0626 9.72856 13.2275 9.60696 13.3491C9.48535 13.4707 9.32042 13.5391 9.14844 13.5391Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <Link to="/boost" className="header-info-settings">
                <div className="icon">
                  <svg
                    width="26"
                    height="24"
                    viewBox="0 0 26 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.0247 9.72615C25.0003 9.60294 24.9497 9.48641 24.8763 9.3845C24.8028 9.28259 24.7083 9.19767 24.5992 9.13553L21.3365 7.27615L21.3234 3.59897C21.323 3.47233 21.2951 3.34728 21.2417 3.23247C21.1882 3.11765 21.1105 3.01581 21.0139 2.93397C19.8304 1.93286 18.4675 1.16566 16.9976 0.673185C16.8819 0.634007 16.7592 0.619508 16.6375 0.630623C16.5158 0.641737 16.3978 0.678218 16.2911 0.737717L13 2.5774L9.70559 0.734435C9.59879 0.674602 9.48062 0.637845 9.35872 0.626541C9.23683 0.615237 9.11392 0.629637 8.99793 0.66881C7.52899 1.16445 6.16757 1.93461 4.98606 2.93834C4.88955 3.02006 4.81191 3.12173 4.75847 3.23635C4.70504 3.35096 4.67708 3.47579 4.67653 3.60225L4.66012 7.28272L1.39746 9.14209C1.28831 9.20423 1.19381 9.28915 1.1204 9.39106C1.04698 9.49298 0.996367 9.6095 0.971995 9.73272C0.673397 11.2332 0.673397 12.7778 0.971995 14.2783C0.996367 14.4016 1.04698 14.5181 1.1204 14.62C1.19381 14.7219 1.28831 14.8068 1.39746 14.869L4.66012 16.7283L4.67325 20.4066C4.67364 20.5333 4.70152 20.6583 4.75496 20.7731C4.80841 20.8879 4.88613 20.9898 4.98278 21.0716C6.16629 22.0727 7.5292 22.8399 8.99903 23.3324C9.11478 23.3716 9.23745 23.3861 9.35914 23.375C9.48084 23.3639 9.59885 23.3274 9.70559 23.2679L13 21.4227L16.2943 23.2657C16.4247 23.3383 16.5717 23.376 16.7209 23.3751C16.8165 23.375 16.9114 23.3595 17.002 23.3291C18.4706 22.8337 19.8319 22.0643 21.0139 21.0618C21.1104 20.9801 21.188 20.8784 21.2415 20.7638C21.2949 20.6492 21.3228 20.5243 21.3234 20.3979L21.3398 16.7174L24.6025 14.858C24.7116 14.7959 24.8061 14.711 24.8795 14.6091C24.9529 14.5071 25.0036 14.3906 25.0279 14.2674C25.3249 12.7681 25.3238 11.225 25.0247 9.72615ZM13 16.3751C12.1347 16.3751 11.2888 16.1185 10.5693 15.6377C9.84988 15.157 9.28912 14.4737 8.95799 13.6743C8.62686 12.8749 8.54022 11.9952 8.70903 11.1465C8.87784 10.2979 9.29452 9.51832 9.90637 8.90647C10.5182 8.29461 11.2978 7.87793 12.1464 7.70912C12.9951 7.54031 13.8748 7.62695 14.6742 7.95809C15.4736 8.28922 16.1569 8.84998 16.6376 9.56944C17.1184 10.2889 17.375 11.1348 17.375 12.0001C17.375 13.1604 16.914 14.2732 16.0936 15.0937C15.2731 15.9141 14.1603 16.3751 13 16.3751Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          <div className="content is-main has-glow">
            <div className="user-attraction" style={{ transform: "translateZ(0px)" }}>
              <div className="user-attraction-item" onClick={() => { navigate("/earn"); }}>
                <div className="user-attraction-item-inner">
                  <div className={`user-attraction-item-${timeRewardLeft ? "status" : ""}`}></div>
                  <picture className="is-token">
                    <source srcSet="./images/attraction/daily_reward.png" type="image/png" />
                    <img className="m-auto img-responsive" src="./images/attraction/daily_reward.png" />
                  </picture>
                  <p>Daily reward</p>
                  <div className="user-attraction-countdown">
                    {sweepNan(moment.duration(timeRewardLeft, "seconds").hours())}:
                    {sweepNan(moment.duration(timeRewardLeft, "seconds").minutes())}
                  </div>
                </div>
              </div>
              <div className="user-attraction-item is-completed" onClick={() => { setCipherMode(!cipherMode); }}>
                <div className="user-attraction-item-inner">
                  <div className={`user-attraction-item-${timeCipherLeft ? "status" : ""}`}></div>
                  <div className="user-attraction-item-completed">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{ enableBackground: "new 0 0 24 24" }}
                        xmlSpace="preserve"
                      >
                        <path
                          d="M9 19.9c-.3 0-.6-.1-.8-.3L3 14.3c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0L9 17.2 20.2 6c.4-.4 1.2-.4 1.6 0 .4.4.4 1.2 0 1.6l-12 12c-.2.2-.5.3-.8.3z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <picture className="is-token">
                    <source srcSet="./images/attraction/daily_cipher.png" type="image/png" />
                    <img className="m-auto img-responsive" src="./images/attraction/daily_cipher.png" />
                  </picture>
                  <p>Daily cipher</p>
                  <div className="user-attraction-countdown">{sweepNan(moment.duration(timeCipherLeft, 'seconds').hours())}:{sweepNan(moment.duration(timeCipherLeft, 'seconds').minutes())}</div>
                </div>
              </div>
              <div className="user-attraction-item" onClick={() => { navigate("/mine"); }}>
                <div className="user-attraction-item-inner">
                  <div className={`user-attraction-item-${timeComboLeft ? "status" : ""}`}></div>
                  <picture className="is-token">
                    <source srcSet="./images/attraction/daily_combo.png" type="image/png" />
                    <img className="m-auto img-responsive" src="./images/attraction/daily_combo.png" />
                  </picture>
                  <p>Daily combo</p>
                  <div className="user-attraction-countdown">{sweepNan(moment.duration(timeComboLeft, 'seconds').hours())}:{sweepNan(moment.duration(timeComboLeft, 'seconds').minutes())}</div>
                </div>
              </div>
              <div
                className="user-attraction-item"
                onClick={() => {
                  navigate("/mine");
                }}
              >
                <div className="user-attraction-item-inner">
                  <div
                    className={`user-attraction-item-${timeComboLeft ? "status" : ""
                      }`}
                  ></div>
                  <picture className="is-token">
                    <source
                      srcSet="./images/attraction/mini_game.png"
                      type="image/png"
                    />
                    <img
                      className="m-auto img-responsive"
                      src="./images/attraction/mini_game.png"
                    />
                  </picture>
                  <p>Minigames</p>
                  <div className="user-attraction-countdown">&nbsp;</div>
                </div>
              </div>
            </div>
            <UserBalance point={point} pointPerClick={pointPerClick} />
            {cipherMode && (
              <div className="daily-combo is-morse">
                <div className="daily-combo-progress">
                  <div className="daily-combo-progress-title">Daily cipher</div>
                  <div className="daily-combo-progress-center">
                    <div className="daily-cipher-code">{cipherText}</div>
                  </div>
                  <div className="daily-combo-progress-claimed">
                    <button className="daily-combo-progress-claimed-info">
                      <div className="price">
                        <div className="price-image">
                          <img className="coin img-responsive is-20" src="/images/coin64.png" />
                        </div>
                        <div className="price-value">+1,000,000</div>
                      </div>
                      <div className="daily-combo-progress-claimed-check">
                        <div className="icon is-12">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ enableBackground: "new 0 0 24 24" }} xmlSpace="preserve">
                            <path d="M9 19.9c-.3 0-.6-.1-.8-.3L3 14.3c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0L9 17.2 20.2 6c.4-.4 1.2-.4 1.6 0 .4.4.4 1.2 0 1.6l-12 12c-.2.2-.5.3-.8.3z" fill="currentColor">
                            </path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
            <TapContainer
              energy={energy}
              setEnergy={setEnergy}
              user={user}
              pointPerClick={pointPerClick}
              energyLimit={energyLimit}
              setEnergyLimit={setEnergyLimit}
              cipherMode={cipherMode}
              setCipherText={setCipherText}
              setCipherMode={setCipherMode}
              skin={skin}
            />
          </div>
        </main>
        <AppBar />
        <div className="coin-animation-container" style={{ display: "none" }}>
          <canvas width="420" height="413"></canvas>
        </div>
        <div
          className="bottom-sheet"
          style={{ display: isDialogOpen ? "flex" : "none" }}
        >
          <div
            className="bottom-sheet-bg"
            style={{ touchAction: "none", userSelect: "none" }}
          />
          <div className="bottom-sheet-inner">
            <div
              className="bottom-sheet-close"
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 32 32" }}
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <BoostDialog setDialogOpen={setDialogOpen} />
          </div>
        </div>

        <div className="bottom-sheet" style={{ display: initialized && user.exchange && bonus ? "flex" : "none" }}>
          <div className="bottom-sheet-bg" style={{ touchAction: "none", userSelect: "none" }} />
          <div className="bottom-sheet-inner">
            <div className="bottom-sheet-close"
              onClick={() => {
                setDialogOpen(false);
                setInitialized(false);
              }}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 32 32" }}
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <InitialDialog
              user={user}
              bonus={bonus}
              setDialogOpen={setDialogOpen}
              setInitialized={setInitialized}
            />
          </div>
        </div>

        <div className="modal" style={{ display: "none" }}>
          <div
            className="modal-bg"
            style={{ touchAction: "none", userSelect: "none" }}
          ></div>
          <div className="modal-inner">
            <div className="modal-close">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  style={{ enableBackground: "new 0 0 32 32" }}
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="modal-scroll"></div>
          </div>
        </div>
        <div id="ton-connect-widget"></div>
      </div>
    </div>
  );
}

export const sweepNan = (value) => {
  return isNaN(value) ? "-" : value;
};

export default Home;
