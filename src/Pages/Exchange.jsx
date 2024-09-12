/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import AppBar from '../Components/AppBar';
import { PointContext } from '../state/PointContext';
import { BACKEND_URL, EXCHANGES } from '../constants';
import ExchangeDialog from '../Components/ExchangeDialog/ExchangeDialog';
import axios from 'axios';

const Exchange = () => {

    const { exchange, setExchange } = useContext(PointContext);

    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleExchangeClick = async (_exchange) => {
        try {
            await axios.post(`${BACKEND_URL}/api/user/update`, {
                exchange: _exchange
            });

            setExchange(_exchange)
        }
        catch (e) {
            console.log('apop@setExchange', e.message);
        }
        finally {
            //
        }
        return false;
    }

    const getActiveIcon = (isActive) => {
        return isActive ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ enableBackground: 'new 0 0 24 24' }} xmlSpace="preserve">
            <path d="M9 19.9c-.3 0-.6-.1-.8-.3L3 14.3c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0L9 17.2 20.2 6c.4-.4 1.2-.4 1.6 0 .4.4.4 1.2 0 1.6l-12 12c-.2.2-.5.3-.8.3z" fill="currentColor" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve">
            <path d="M9 20.6c-.3 0-.6-.1-.8-.3-.4-.4-.4-1.2 0-1.6l6.7-6.7-6.7-6.7c-.4-.4-.4-1.2 0-1.6s1.2-.4 1.6 0l7.5 7.5c.4.4.4 1.2 0 1.6l-7.5 7.5c-.2.2-.5.3-.8.3z" fill="currentColor" />
        </svg>
    }

    return (
        <div className="page">
            <main className="main">
                <div className="inner settings">
                    <div className="settings-title">Choose exchange</div>
                    <button className={`settings-item ${exchange == EXCHANGES.SOL_SNIPER ? `is-active` : ``}`} onClick={() => { handleExchangeClick(EXCHANGES.SOL_SNIPER); setDialogOpen(true) }}>
                        <div className="settings-item-image">
                            <div className="exchange-image is-binance">{getExchangeIcon(EXCHANGES.SOL_SNIPER)}</div>
                        </div>
                        <div className="settings-item-content">
                            <p>Sol Sniper</p>
                        </div>
                        <div className="settings-item-action">
                            <div className="icon is-24">{getActiveIcon(exchange == EXCHANGES.SOL_SNIPER)}</div>
                        </div>
                    </button>
                    <button className={`settings-item ${exchange == EXCHANGES.MAGIC_EDEN ? `is-active` : ``}`} onClick={() => { handleExchangeClick(EXCHANGES.MAGIC_EDEN); setDialogOpen(true) }}>
                        <div className="settings-item-image">
                            <div className="exchange-image is-mexc">{getExchangeIcon(EXCHANGES.MAGIC_EDEN)}</div>
                        </div>
                        <div className="settings-item-content">
                            <p>Magic Eden</p>
                        </div>
                        <div className="settings-item-action">
                            <div className="icon is-24">{getActiveIcon(exchange == EXCHANGES.MAGIC_EDEN)}</div>
                        </div>
                    </button>
                    <button className={`settings-item ${exchange == EXCHANGES.TENSOR ? `is-active` : ``}`} onClick={() => { handleExchangeClick(EXCHANGES.TENSOR); setDialogOpen(true) }}>
                        <div className="settings-item-image">
                            <div className="exchange-image is-bitget">{getExchangeIcon(EXCHANGES.TENSOR)}</div>
                        </div>
                        <div className="settings-item-content">
                            <p>Tensor</p>
                        </div>
                        <div className="settings-item-action">
                            <div className="icon is-24">{getActiveIcon(exchange == EXCHANGES.TENSOR)}</div>
                        </div>
                    </button>
                    <button className={`settings-item ${exchange == EXCHANGES.VTOPIA ? `is-active` : ``}`} onClick={() => { handleExchangeClick(EXCHANGES.VTOPIA); setDialogOpen(true) }}>
                        <div className="settings-item-image">
                            <div className="exchange-image is-bitget">{getExchangeIcon(EXCHANGES.VTOPIA)}</div>
                        </div>
                        <div className="settings-item-content">
                            <p>VTopia</p>
                        </div>
                        <div className="settings-item-action">
                            <div className="icon is-24">{getActiveIcon(exchange == EXCHANGES.VTOPIA)}</div>
                        </div>
                    </button>
                </div>
            </main>
            <AppBar />
            <div className="coin-animation-container" style={{ display: 'none' }}><canvas width={420} height={639} /></div>
            <div className="bottom-sheet" style={{ display: isDialogOpen ? 'flex' : 'none' }}>
                <div className="bottom-sheet-bg" style={{ touchAction: 'none', userSelect: 'none' }} />
                <div className="bottom-sheet-inner">
                    <div className="bottom-sheet-close" onClick={() => { setDialogOpen(false) }}>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={{ enableBackground: 'new 0 0 32 32' }} viewBox="0 0 32 32">
                                <path d="M16 3a13 13 0 0 0-7.2 2.2C6.6 6.6 5 8.6 4 11s-1.2 5-.7 7.5 1.7 4.8 3.6 6.7c1.8 1.8 4.1 3.1 6.7 3.6 2.4.5 5 .2 7.4-.8a13 13 0 0 0 5.8-4.8c1.4-2.1 2.2-4.7 2.2-7.2 0-3.4-1.4-6.8-3.8-9.2C22.8 4.4 19.4 3 16 3zm4.7 16.3c.1.1.2.2.2.3.1.1.1.3.1.4s0 .3-.1.4c-.1.1-.1.2-.2.3-.1.1-.2.2-.3.2-.1.1-.3.1-.4.1s-.3 0-.4-.1c-.1-.1-.2-.1-.3-.2L16 17.4l-3.3 3.3c-.1.1-.2.2-.3.2s-.3.1-.4.1-.3 0-.4-.1-.2-.1-.3-.2c-.1-.1-.2-.2-.2-.3-.1-.1-.1-.3-.1-.4s0-.3.1-.4c.1-.1.1-.2.2-.3l3.3-3.3-3.3-3.3c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3l3.3 3.3 3.3-3.3c.1-.1.2-.2.3-.2.1-.1.3-.1.4-.1s.3 0 .4.1c.1.1.2.1.3.2.1.1.2.2.2.3s.1.3.1.4 0 .3-.1.4-.1.2-.2.3L17.4 16l3.3 3.3z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <ExchangeDialog exchange={exchange} />
                </div>
            </div>
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
        </div>
    )
}

export const getExchangeIcon = (exchange) => {
    switch (exchange.name) {
        case EXCHANGES.SOL_SNIPER.name:
            return <img src='/images/marketplaces/sol-sniper.png' className="coin img-responsive" />
        case EXCHANGES.MAGIC_EDEN.name:
            return <img src='/images/marketplaces/magic-eden.png' className="coin img-responsive" />
        case EXCHANGES.TENSOR.name:
            return <img src='/images/marketplaces/tensor.png' className="coin img-responsive" />
        case EXCHANGES.VTOPIA.name:
            return <img src='/images/marketplaces/vtopia.png' className="coin img-responsive" />
        default:
            return <></>
    }
}

export default Exchange;