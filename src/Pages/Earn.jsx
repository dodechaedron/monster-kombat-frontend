import { useContext, useEffect, useState } from 'react'
import { PointContext } from '../state/PointContext'
import AppBar from '../Components/AppBar';
import DailyRewardDialog from '../Components/DailyRewardDialog/DailyRewardDialog';
import axios from 'axios';
import { BACKEND_URL, EXCHANGE_TASK_NAME, INVITE_TASK_NAME, TG_CHANNEL_TASK_NAME, X_CHANNEL_TASK_NAME, YOUTUBE_CHANNEL } from '../constants';
import TGChannelDialog from '../Components/TGChannelDialog/TGChannelDialog';
import ExchangeTaskDialog from '../Components/ExchangeTaskDialog/ExchangeTaskDialog';
import InviteTaskDialog from '../Components/InviteTaskDialog/InviteTaskDialog';
import XChannelDialog from '../Components/XChannelDialog/XChannelDialog';
import YoutubeChannelDialog from '../Components/YoutubeChannelDialog/YoutubeChannelDialog';
import { useNavigate } from 'react-router-dom';

function Earn() {
    const { user, fullEnergy, setFullEnergy, setEnergy, setPoint, setUser } = useContext(PointContext);

    const [isDialogOpen, setDialogOpen] = useState("");
    const [days, setDays] = useState(0);
    const [available, setAvailable] = useState(true);

    const navigate = useNavigate();

    const checkTask = (name) => {
        // console.log(user)
        return user?.tasks?.find(task => task.name == name) ? true : false;
    }

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
                //
            }
            return false;
        }

        fetchDailyReward();
    }, [])

    return (
        <div className="page">

            <main className="main">
                <div className="inner earn">
                    <div className="earn-top">
                        <div
                            className="earn-top-image"
                            style={{ transform: "translateZ(0px)", opacity: 1 }}
                        >
                            <div className="icon">
                                <svg
                                    width={275}
                                    height={275}
                                    viewBox="0 0 275 275"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g filter="url(#filter0_f_1464_6497)">
                                        <circle
                                            cx="137.529"
                                            cy="137.471"
                                            r="72.4143"
                                            fill="#FFD337"
                                        />
                                    </g>
                                    <circle
                                        cx={137}
                                        cy={138}
                                        r="63.4286"
                                        fill="white"
                                        fillOpacity="0.05"
                                    />
                                    <circle
                                        cx={137}
                                        cy={138}
                                        r={74}
                                        fill="white"
                                        fillOpacity="0.05"
                                    />
                                    <defs>
                                        <filter
                                            id="filter0_f_1464_6497"
                                            x="0.0999756"
                                            y="0.0428467"
                                            width="274.857"
                                            height="274.857"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feBlend
                                                mode="normal"
                                                in="SourceGraphic"
                                                in2="BackgroundImageFix"
                                                result="shape"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="32.5071"
                                                result="effect1_foregroundBlur_1464_6497"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <img
                                className="img-responsive"
                                src="/images/coin64.png"
                            />
                        </div>
                        <div
                            className="earn-top-title"
                            style={{ transform: "translateZ(0px)", opacity: 1 }}
                        >
                            Earn more coins
                        </div>
                    </div>
                    {/* <div className="section-title">Monster Kombat Socials</div>
                    <div className="earn-column">
                        <div className="earn-item" onClick={() => { setDialogOpen("youtube-channel") }}>
                            <div className="earn-item-image">
                                <div
                                    className="earn-image"
                                    style={{
                                        transform: "scale(1) translateZ(0px)",
                                        opacity: 1,
                                    }}
                                >
                                    <picture>
                                        <source
                                            srcSet="/images/earn/hamster_youtube_channel.webp"
                                            type="image/webp"
                                            alt="hamster_youtube_easy_start_s1e28"
                                        />
                                        <img
                                            className="img-responsive"
                                            src="/images/earn/hamster_youtube_channel.png"
                                            alt="hamster_youtube_easy_start_s1e28"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="earn-item-content">
                                <div className="earn-item-content-top">
                                    Join Our Youtube Channel
                                </div>
                                <div className="earn-item-content-bottom">
                                    <div className="price">
                                        <div className="price-image">
                                            <img
                                                className="coin img-responsive is-20"
                                                src="data:image/webp;base64,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"
                                            />
                                        </div>
                                        <div className="price-value">+10'000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="earn-item-icon">
                                {checkTask('youtube-channel') ? <div className="earn-item-icon-success">
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
                                            />
                                        </svg>
                                    </div>
                                </div> : <div className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                    </div> */}
                    <div className="section-title">Daily tasks</div>
                    <div className="earn-column">
                        <div className="earn-item is-completed" onClick={() => { navigate('/daily-bonus'); }}>
                            <div className="earn-item-image">
                                <div
                                    className="earn-image"
                                    style={{
                                        transform: "scale(1) translateZ(0px)",
                                        opacity: 1,
                                    }}
                                >
                                    <picture>
                                        <source
                                            srcSet="/images/earn/calendar.svg"
                                            type="image/svg"
                                            alt="streak_days"
                                        />
                                        <img
                                            className="img-responsive"
                                            src="/images/earn/calendar.svg"
                                            alt="streak_days"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="earn-item-content">
                                <div className="earn-item-content-top">Daily Rewards</div>
                                <div className="earn-item-content-bottom">
                                    <div className="price">
                                        <div className="price-image">
                                            <img
                                                className="coin img-responsive is-20"
                                                src="/images/coin64.png"
                                            />
                                        </div>
                                        <div className="price-value">Up to 10,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="earn-item-icon">
                                {days && !available ? <div className="earn-item-icon-success">
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
                                            />
                                        </svg>
                                    </div>
                                </div> : <div className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="section-title">Tasks list</div>
                    <div className="earn-column">
                        <div className="earn-item" onClick={() => { setDialogOpen("tg-channel") }}>
                            <div className="earn-item-image">
                                <div
                                    className="earn-image"
                                    style={{
                                        transform: "scale(1) translateZ(0px)",
                                        opacity: 1,
                                    }}
                                >
                                    <picture>
                                        <source
                                            srcSet="/images/earn/telegram.png"
                                            type="image/png"
                                            alt="subscribe_telegram_channel"
                                        />
                                        <img
                                            className="img-responsive"
                                            src="/images/earn/telegram.png"
                                            alt="subscribe_telegram_channel"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="earn-item-content">
                                <div className="earn-item-content-top">
                                    Join our TG channel
                                </div>
                                <div className="earn-item-content-bottom">
                                    <div className="price">
                                        <div className="price-image">
                                            <img
                                                className="coin img-responsive is-20"
                                                src="/images/coin64.png"
                                            />
                                        </div>
                                        <div className="price-value">+5,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="earn-item-icon">
                                {checkTask(TG_CHANNEL_TASK_NAME) ? <div className="earn-item-icon-success">
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
                                            />
                                        </svg>
                                    </div>
                                </div> : <div className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                        <div className="earn-item" onClick={() => { setDialogOpen("x-channel") }}>
                            <div className="earn-item-image">
                                <div
                                    className="earn-image"
                                    style={{
                                        transform: "scale(1) translateZ(0px)",
                                        opacity: 1,
                                    }}
                                >
                                    <img className="img-responsive" src="/images/earn/x.png" />
                                </div>
                            </div>
                            <div className="earn-item-content">
                                <div className="earn-item-content-top">
                                    Follow our X account
                                </div>
                                <div className="earn-item-content-bottom">
                                    <div className="price">
                                        <div className="price-image">
                                            <img
                                                className="coin img-responsive is-20"
                                                src="/images/coin64.png"
                                            />
                                        </div>
                                        <div className="price-value">+5,000</div>
                                    </div>
                                </div>
                            </div>
                            <div className="earn-item-icon">
                                {checkTask(X_CHANNEL_TASK_NAME) ? <div className="earn-item-icon-success">
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
                                            />
                                        </svg>
                                    </div>
                                </div> : <div className="icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                    >
                                        <path
                                            d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>}
                            </div>
                        </div>
                        <div className="earn-column">
                            <div className="earn-item">
                                <div className="earn-item-image">
                                    <div
                                        className="earn-image"
                                        style={{
                                            transform: "scale(1) translateZ(0px)",
                                            opacity: 1,
                                        }}
                                    >
                                        <img
                                            className="img-responsive"
                                            src="data:image/png;base64,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"
                                        />
                                    </div>
                                </div>
                                <div className="earn-item-content" onClick={() => { setDialogOpen("exchange-task") }}>
                                    <div className="earn-item-content-top">
                                        Choose your exchange
                                    </div>
                                    <div className="earn-item-content-bottom">
                                        <div className="price">
                                            <div className="price-image">
                                                <img
                                                    className="coin img-responsive is-20"
                                                    src="/images/coin64.png"
                                                />
                                            </div>
                                            <div className="price-value">+5,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-item-icon">
                                    {checkTask(EXCHANGE_TASK_NAME) ? <div className="earn-item-icon-success">
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
                                                />
                                            </svg>
                                        </div>
                                    </div> : <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>}
                                </div>
                            </div>
                            <div className="earn-item" onClick={() => { setDialogOpen('invite-task') }}>
                                <div className="earn-item-image">
                                    <div
                                        className="earn-image"
                                        style={{
                                            transform: "scale(1) translateZ(0px)",
                                            opacity: 1,
                                        }}
                                    >
                                        <picture>
                                            <source
                                                srcSet="/images/icons/friends.svg"
                                                type="image/webp"
                                                alt="invite_friends"
                                            />
                                            <img
                                                className="img-responsive"
                                                src="/images/earn/earn-ico-03.png"
                                                alt="invite_friends"
                                            />
                                        </picture>
                                    </div>
                                </div>
                                <div className="earn-item-content">
                                    <div className="earn-item-content-top">Invite 3 friends</div>
                                    <div className="earn-item-content-bottom">
                                        <div className="price">
                                            <div className="price-image">
                                                <img
                                                    className="coin img-responsive is-20"
                                                    src="/images/coin64.png"
                                                />
                                            </div>
                                            <div className="price-value">+25,000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="earn-item-icon">
                                    {checkTask(INVITE_TASK_NAME) ? <div className="earn-item-icon-success">
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
                                                />
                                            </svg>
                                        </div>
                                    </div> : <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <AppBar />
            <div className="coin-animation-container" style={{ display: "none" }}>
                <canvas width={355} height={572} />
            </div>
            <div className="bottom-sheet" style={{ display: isDialogOpen ? "flex" : 'none' }}>
                <div
                    className="bottom-sheet-bg"
                    style={{ touchAction: "none", userSelect: "none" }}
                />
                <div className="bottom-sheet-inner">
                    <div className="bottom-sheet-close" onClick={() => { setDialogOpen('') }}>
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
                    {isDialogOpen === "youtube-channel" && <YoutubeChannelDialog setPoint={setPoint} setUser={setUser} url={YOUTUBE_CHANNEL} setDialogOpen={setDialogOpen} />}

                    {isDialogOpen === "daily-reward" && <DailyRewardDialog setDialogOpen={setDialogOpen} available={available} setAvailable={setAvailable} days={days} setDays={setDays} setPoint={setPoint} setUser={setUser} />}
                    {isDialogOpen === "tg-channel" && <TGChannelDialog setPoint={setPoint} setUser={setUser} setDialogOpen={setDialogOpen} />}
                    {isDialogOpen === "x-channel" && <XChannelDialog setPoint={setPoint} setUser={setUser} setDialogOpen={setDialogOpen} />}
                    {isDialogOpen === "exchange-task" && <ExchangeTaskDialog setDialogOpen={setDialogOpen} setPoint={setPoint} setUser={setUser} />}
                    {isDialogOpen === "invite-task" && <InviteTaskDialog setDialogOpen={setDialogOpen} setPoint={setPoint} setUser={setUser} />}
                </div>
            </div>
            <div className="modal" style={{ display: "none" }}>
                <div
                    className="modal-bg"
                    style={{ touchAction: "none", userSelect: "none" }}
                />
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
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="modal-scroll" />
                </div>
            </div>
            <div id="ton-connect-widget" />
        </div>
    )
}

export default Earn
