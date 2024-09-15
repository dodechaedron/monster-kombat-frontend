import { useContext, useEffect, useState } from 'react'
import AppBar from '../Components/AppBar'
import { PointContext } from '../state/PointContext'
import { ENERGY_LIMITS, FULL_ENERGY, MULTI_TAPS, TOP_LEVEL } from '../constants'
import FullEnergyDialog from '../Components/FullEnergyDialog/FullEnergyDialog'
import MultiTap from '../Components/MultiTap/MultiTap'
import EnergyLimitDialog from '../Components/EnergyLimitDialog/EnergyLimitDialog'
import moment from 'moment'
import HighestDailyRecord from '../Components/HighestDailyRecord/HighestDailyRecord'
import { useNavigate } from 'react-router-dom'

let fullEnergyTimeInterval = 0;
function HighestDailyEarnings() {
    const { user, setUser } = useContext(PointContext);

    const navigate = useNavigate()

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
                    <div className="relative inner boost">
                        <div className='flex flex-row items-center justify-center'>
                            <img className='cursor-pointer' src='/images/prev.svg' onClick={() => { navigate(-1) }} />
                            <h1 className='flex-1 my-4 text-3xl text-center text-white'>Highest Daily Earnings</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/icons/highest.png" />
                        </div>
                        <p className='text-center px-[10%] !my-6 w-2/3 mx-auto'>
                            The highest amount you earned in a single day.
                        </p>
                        <div className='flex flex-row justify-center items-center gap-10 rounded-full bg-[#15140C] py-6 mx-10'>
                            <div className='flex flex-col items-center justify-center gap-2'>
                                <p className='text-lg boost-top-text'>08 Aug, 2024</p>
                                <p className='text-lg boost-top-text'>10:12 PM</p>
                                <div className='flex flex-row items-center justify-between gap-2'>
                                    <img className='w-16 h-16' src="/images/coin64.png" />
                                    <p className='text-4xl text-white'>{user.highest_earning}</p>
                                </div>
                            </div>
                        </div>
                        <button className='button button-primary button-large text-[16px] mx-auto my-6' onClick={() => { setDialogOpen(true) }} disabled={!user || (user?.point - user?.last_point < user?.highest_earning)}>
                            Break your Record Today <span className='w-2 h-2 rounded-full bg-[#1D1C17] mx-2'></span> Earn 10,000
                        </button>
                        <div className='flex flex-row items-center justify-between mt-12 mb-2'>
                            <p className='text-sm text-center'>0</p>
                            <p className='text-sm text-center'>{user.highest_earning}</p>
                        </div>
                        <div className='w-full flex items-center rounded-full border-[#FFD300] border h-5 relative' style={{ boxShadow: 'rgba(250, 184, 34, 0.6) 0px -1px 4px, rgba(250, 184, 34, 0.6) 0px 1px 4px' }}>
                            <div className={`bg-[#1D1C17] rounded-full h-4`} style={{ width: Math.min(((Math.max(user.point - user.last_point, 0)) * 100 / user.highest_earning), 100).toString() + '%' }} />
                        </div>
                    </div>
                </main>
                <AppBar />
                <div className="coin-animation-container" style={{ display: 'none' }}><canvas width={420} height={639} />
                </div>
                <div className="bottom-sheet" style={{ display: isDialogOpen ? 'flex' : `none` }}>
                    <div className="bottom-sheet-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                    <div className="bottom-sheet-inner">
                        <div className="bottom-sheet-close" onClick={() => { setDialogOpen(false) }}>
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 32 32' }} viewBox="0 0 32 32"><path d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z" fill="currentColor" /></svg></div></div>
                        {isDialogOpen && <HighestDailyRecord setDialogOpen={setDialogOpen} setUser={setUser} />}
                    </div>
                </div >
                <div className="modal" style={{ display: 'none' }}>
                    <div className="modal-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                    <div className="modal-inner">
                        <div className="modal-close">
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 32 32' }} viewBox="0 0 32 32">
                                <path d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z" fill="currentColor" />
                            </svg></div>
                        </div>
                        <div className="modal-scroll" />
                    </div>
                </div>
                <div id="ton-connect-widget" />
            </div >
        </div >
    )
}

export default HighestDailyEarnings
