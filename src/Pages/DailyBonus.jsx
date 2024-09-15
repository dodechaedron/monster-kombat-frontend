/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import AppBar from '../Components/AppBar'
import { PointContext } from '../state/PointContext'
import { BACKEND_URL, DAILY_REWARD_LIST } from '../constants'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Spinner } from '../Components/Spinner'
import { useNavigate } from 'react-router-dom'

function DailyBonus() {
    const { setPoint, setUser } = useContext(PointContext);

    const [isDialogOpen, setDialogOpen] = useState("");
    const [days, setDays] = useState(0);
    const [available, setAvailable] = useState(true);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchDailyReward = async () => {
            try {
                const response = await axios.post(`${BACKEND_URL}/api/task/daily-task`);
                const { data } = response;
                const { days, available, point } = data;

                setAvailable(available);
                setDays(days);
                if (point != undefined) {
                    setPoint(point);
                }
            }
            catch (e) {
                console.log('apop@fetchDailyReward', e.message);
            }
            finally {
                setLoading(false);
            }
            return false;
        }

        fetchDailyReward();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClaim = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/task/claim-daily`);
            const { data } = response;
            const { days, available, user, status } = data;

            setAvailable(available);
            setDays(days);
            setDialogOpen(false);

            if (status == "success") {
                setUser(user);
                setPoint(user?.point);
                toast.success("Successfully Claimed")
            } else {
                toast.error("Claim Failed.")
            }
        }
        catch (e) {
            console.log('apop@fetchDailyReward', e.message);
            toast.error("Claim Failed.")
        }
        finally {
            //
        }
        return false;
    }


    return (
        <div>
            <div className="page">
                <main className="main">
                    <div className="relative inner boost">
                        <div className='flex flex-row items-center justify-center'>
                            <img src='/images/prev.svg' className='cursor-pointer' onClick={() => { navigate(-1) }} />
                            <h1 className='flex-1 my-4 text-3xl text-center text-white'>Daily Reward</h1>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src="/images/earn/daily-reward.png" className='is-60 coin'/>
                        </div>
                        <p className='text-center px-[10%] !my-6 mx-auto'>
                            Get coins for logging into the app every day. The more days you log in, the more rewards you earn.
                        </p>
                        <ul className="mb-10 bs-content-daily">
                            {!loading ? Array(20).fill(1).map((value, index) => (
                                <li className={`${days > index ? '!bg-[#004917]' : days == index ? 'is-current' : 'is-disabled'} v-popper--has-tooltip`} key={`daily-reward-${index}`}>
                                    <span>Day {index + 1}</span>
                                    <div className="bs-content-daily-coin">
                                        <img
                                            className="coin img-responsive"
                                            src="/images/coin64.png"
                                        />
                                    </div>
                                    <p>{DAILY_REWARD_LIST[index]}</p>
                                </li>
                            )) : <Spinner />}
                        </ul>
                    </div>
                    <div className='sticky w-full bottom-24'>
                        <button className='button button-primary button-large mx-auto w-[90%]' onClick={handleClaim}>
                            Claim
                        </button>
                    </div>
                </main>
                <AppBar />
                <div className="coin-animation-container" style={{ display: 'none' }}><canvas width={420} height={639} />
                </div>
                <div className="bottom-sheet" style={{ display: isDialogOpen ? 'flex' : `none` }}>
                    <div className="bottom-sheet-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                    <div className="bottom-sheet-inner">
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

export default DailyBonus
