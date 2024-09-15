import { useContext, useEffect, useState } from 'react'
import AppBar from '../Components/AppBar'
import { PointContext } from '../state/PointContext'
import { ENERGY_LIMITS, FULL_ENERGY, MULTI_TAPS } from '../constants'
import FullEnergyDialog from '../Components/FullEnergyDialog/FullEnergyDialog'
import MultiTap from '../Components/MultiTap/MultiTap'
import EnergyLimitDialog from '../Components/EnergyLimitDialog/EnergyLimitDialog'
import moment from 'moment'
import EnergySpeedDialog from '../Components/EnergySpeedDialog/EnergySpeedDialog'

let fullEnergyTimeInterval = 0;
function Boost() {
    const { user, fullEnergy, setFullEnergy, setEnergy, energyLimit, point, setPoint, setEnergyLimit, setTurbo, multiTapLevel, energyLimitLevel, setEnergyLimitLevel } = useContext(PointContext);

    const [isDialogOpen, setDialogOpen] = useState("");
    const [remainTime, setRemainTime] = useState(0);

    useEffect(() => {
        const lastFillTime = localStorage.getItem('app@energy_filled_time');
        if (lastFillTime) {
            const _remainTime = 3600000 - new Date().getTime() + +lastFillTime;
            setRemainTime(_remainTime);
            fullEnergyTimeInterval = setInterval(() => {
                if (remainTime < 0) {
                    clearInterval(fullEnergyTimeInterval);
                }
                setRemainTime(prev => {
                    return prev - 1000;
                });
            }, 1000);
        }
        return () => {
            clearInterval(fullEnergyTimeInterval);
        }
    }, [])

    return (
        <div>
            <div className="page">
                <main className="main">
                    <div className="inner boost">
                        <h1 className='text-3xl text-center text-white'>Boost Your Profit</h1>
                        <div className='flex flex-row justify-center items-center py-6'>
                            <div className='flex flex-col items-start justify-center gap-2'>
                                <p className='boost-top-text'>Your Balance</p>
                                <div className='flex flex-row items-center justify-between gap-2'>
                                    <img className='w-12 h-12' src="/images/coin64.png" />
                                    <p className='text-2xl text-white'>{new Intl.NumberFormat().format(point)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-title">Free daily boosters</div>
                        <div className="boost-column">
                            <div className="boost-item">
                                <div className="boost-item-image" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }}>
                                    <div className="icon"><svg width={22} height={30} viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="paint0_linear_603_213" x1="8.50006" y1="-0.000122016" x2="13.5001" y2="35.4999" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FCD924" />
                                                <stop offset={1} stopColor="#FF5F1B" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M21.7312 14.6825L7.73123 29.6825C7.58287 29.8408 7.38704 29.9466 7.17329 29.9839C6.95953 30.0211 6.73946 29.9879 6.54627 29.8891C6.35308 29.7903 6.19726 29.6314 6.10233 29.4363C6.00739 29.2412 5.97849 29.0205 6.01999 28.8075L7.85248 19.6412L0.648735 16.9362C0.494024 16.8784 0.356059 16.7831 0.247164 16.6589C0.138268 16.5347 0.0618354 16.3854 0.0246932 16.2245C-0.012449 16.0635 -0.00914339 15.8959 0.0343144 15.7365C0.0777721 15.5772 0.160028 15.431 0.273735 15.3112L14.2737 0.311236C14.4221 0.152905 14.6179 0.047125 14.8317 0.00985718C15.0454 -0.0274107 15.2655 0.00585619 15.4587 0.104638C15.6519 0.203419 15.8077 0.362356 15.9026 0.557463C15.9976 0.75257 16.0265 0.973262 15.985 1.18624L14.1475 10.3625L21.3512 13.0637C21.5048 13.122 21.6417 13.2172 21.7497 13.3409C21.8578 13.4646 21.9337 13.613 21.9707 13.773C22.0078 13.933 22.0049 14.0997 21.9622 14.2583C21.9196 14.417 21.8385 14.5626 21.7262 14.6825H21.7312Z" fill="url(#paint0_linear_603_213)" />
                                    </svg>
                                    </div>
                                </div>
                                <div className="boost-item-content" onClick={() => { remainTime > 0 ? '' : setDialogOpen('full-energy') }}>
                                    <div className="boost-item-content-top">Full energy</div>
                                    <div className="boost-item-content-bottom">{fullEnergy}/{FULL_ENERGY} available</div>
                                    <div className="boost-item-bottom-info">
                                        {remainTime > 0 && <div className="boost-countdown">
                                            {moment.duration(remainTime, 'millisecond').minutes().toPrecision(2)} : {moment.duration(remainTime, 'millisecond').seconds()}
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className="boost-item">
                                <div className="boost-item-image" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }}>
                                    <img className="is-boost" src="/images/boost/rocket.png" alt="Boost" /></div>
                                <div className="boost-item-content" onClick={() => { setDialogOpen('turbo') }}>
                                    <div className="boost-item-content-top">Turbo</div>
                                    <div className="boost-item-content-bottom">Coming soon</div>
                                </div>
                            </div>
                        </div>
                        <div className="section-title">Boosters</div>
                        <div className="boost-column">
                            <div className="boost-item">
                                <div className="boost-item-image">
                                    <img src="/images/boost/boost-multitap.png" alt="BoostEarnPerTap" style={{ transform: 'scale(1) translateZ(0px)', opacity: 1 }} />
                                </div>
                                <div className="boost-item-content" onClick={() => { setDialogOpen('multi-tap') }}>
                                    <div className="boost-item-content-top">Multitap</div>
                                    <div className="boost-item-content-bottom">
                                        <div className="price">
                                            <div className="price-image">
                                                <img className="coin img-responsive is-20" src="/images/coin64.png" />
                                            </div>
                                            <div className="price-value">{new Intl.NumberFormat().format(MULTI_TAPS[multiTapLevel + 1].point)}</div>
                                        </div>
                                        <span>&nbsp;• {multiTapLevel + 1} lvl</span>
                                    </div>
                                </div>
                                <div className="boost-item-icon">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                                            <path d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="boost-item" onClick={() => { setDialogOpen('energy-limit') }}>
                                <div className="boost-item-image"><img src="/images/boost/boost-energy.png" alt="BoostMaxTaps" style={{ transform: 'scale(1) translateZ(0px)' }} /></div>
                                <div className="boost-item-content">
                                    <div className="boost-item-content-top">Energy limit</div>
                                    <div className="boost-item-content-bottom">
                                        <div className="price">
                                            <div className="price-image">
                                                <img className="coin img-responsive is-20" src="/images/coin64.png" />
                                            </div>
                                            <div className="price-value">{new Intl.NumberFormat().format(ENERGY_LIMITS[energyLimitLevel + 1].point)}</div>
                                        </div>
                                        <span>&nbsp;• {energyLimitLevel + 1} lvl</span>
                                    </div>
                                </div>
                                <div className="boost-item-icon">
                                    <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                                        <path d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z" fill="currentColor" />
                                    </svg></div>
                                </div>
                            </div>

                            <div className="settings-item mt-8 !bg-[#262622]">
                                <div className="settings-item-content">
                                    <p>Delete account</p>
                                </div>
                                <div className="settings-item-action">
                                    <div className="icon is-24">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
                                            <path d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <AppBar />
                <div className="coin-animation-container" style={{ display: 'none' }}><canvas width={420} height={639} />
                </div>
                <div className="bottom-sheet" style={{ display: isDialogOpen ? 'flex' : `none` }}>
                    <div className="bottom-sheet-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                    <div className="bottom-sheet-inner">
                        <div className="bottom-sheet-close" onClick={() => { setDialogOpen("") }}>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 32 32' }} viewBox="0 0 32 32">
                                <path d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z" fill="currentColor" />
                            </svg></div>
                        </div>
                        {isDialogOpen == 'full-energy' && <FullEnergyDialog user={user} fullEnergy={fullEnergy} setFullEnergy={setFullEnergy} setEnergy={setEnergy} energyLimit={energyLimit} setDialogOpen={setDialogOpen} />}
                        {isDialogOpen == 'multi-tap' && <MultiTap />}
                        {isDialogOpen == 'energy-limit' && <EnergyLimitDialog energyLimit={energyLimit} setEnergy={setEnergy} point={point} setPoint={setPoint} setEnergyLimit={setEnergyLimit} setDialogOpen={setDialogOpen} energyLimitLevel={energyLimitLevel} setEnergyLimitLevel={setEnergyLimitLevel} />}
                        {isDialogOpen == 'turbo' && <EnergySpeedDialog user={user} setEnergyLimitLevel={setEnergyLimitLevel} setEnergy={setEnergy} setDialogOpen={setDialogOpen} setTurbo={setTurbo} />}
                    </div>
                </div>
                <div className="modal" style={{ display: 'none' }}>
                    <div className="modal-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                    <div className="modal-inner">
                        <div className="modal-close">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 32 32' }} viewBox="0 0 32 32">
                                    <path d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div className="modal-scroll" />
                    </div>
                </div>
                <div id="ton-connect-widget" />
            </div>
        </div>
    )
}

export default Boost
