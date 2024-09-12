import { useContext, useState } from 'react'
import { PointContext } from '../state/PointContext'
import { Link } from 'react-router-dom';
import AppBar from '../Components/AppBar';
import WalletConnectDialog from '../Components/WalletConnectDialog/WalletConnectDialog';
import Proivders from '../state/WalletProvider';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { AIRDROP_TASK_NAME } from '../constants';

function AirDrop() {

    const { user } = useContext(PointContext);
    const [isDialogOpen, setDialogOpen] = useState("");

    const checkTask = () => {
        const task = user.tasks?.find(value => value.name == AIRDROP_TASK_NAME)
        return !!task && user?.wallet_address;
    }
    return (
        <Proivders>
            <div className="page">
                <main className="main">
                    <div className="inner airdrop">
                        <div className="airdrop-top">
                            <div
                                className="airdrop-top-image"
                                style={{ transform: "translateZ(0px)", opacity: 1 }}
                            >
                                <div className="icon">
                                    <img src="/images/airdrop/airdrop.png" className='max-w-[170px] my-4' />
                                </div>
                            </div>
                            <div
                                className="airdrop-top-title"
                                style={{ transform: "translateZ(0px)", opacity: 1 }}
                            >
                                Airdrop tasks
                            </div>
                            <div
                                className="friends-description"
                                style={{ transform: "translateZ(0px)", opacity: 1 }}
                            >
                                The $DOKO listing is on its way. It will be the world’s first tap-to-earn token on the Solana blockchain. To participate in the airdrop, make sure to add your Solana wallet address to the app (we recommend using the Phantom wallet).
                            </div>
                        </div>
                        <div className="section-title">Tasks list</div>
                        <div className="airdrop-item is-connect_ton_wallet" onClick={() => { setDialogOpen(true) }}>
                            <div className="airdrop-item-image">
                                <div
                                    className="airdrop-image"
                                    style={{ transform: "scale(1) translateZ(0px)", opacity: 1 }}
                                >
                                    <picture>
                                        <source
                                            srcSet="/images/airdrop/airdrop-wallet.png"
                                            type="image/png"
                                            alt="airdrop_connect_ton_wallet"
                                        />
                                        <img
                                            className="img-responsive"
                                            src="/images/airdrop/airdrop-wallet.png"
                                            alt="airdrop_connect_ton_wallet"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="airdrop-item-content">
                                <div className="airdrop-item-content-top">
                                    {checkTask() ? `Change  your wallet` : `Connect your Solana wallet`}
                                </div>
                            </div>
                            <div className="airdrop-item-icon">
                                {checkTask() ? <div className="earn-item-icon-success">
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
                        {checkTask() && <div>
                            You connected with <span className='text-teal-400'>{`${user?.wallet_address?.slice(0, 4)}...${user?.wallet_address?.slice(-6)}`}</span>
                        </div>}
                        <div className="section-title mt-10">Create Phantom Wallet</div>
                        <Link className="airdrop-item !bg-[#AB9FF2]" to={`https://phantom.app/download`} target='_blank'>
                            <div className="airdrop-item-image">
                                <div
                                    className="airdrop-image"
                                    style={{ transform: "scale(1) translateZ(0px)", opacity: 1 }}
                                >
                                    <picture>
                                        <source
                                            srcSet="/images/icons/phantom.png"
                                            type="image/png"
                                            alt="airdrop_connect_ton_wallet"
                                        />
                                        <img
                                            className="img-responsive"
                                            src="/images/icons/phantom.png"
                                            alt="airdrop_connect_ton_wallet"
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="airdrop-item-content">
                                <div className="airdrop-item-content-top">
                                    Create Phantom Wallet
                                </div>


                            </div>
                            <div className="airdrop-item-icon">
                                <div className="icon">
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
                                </div>
                            </div>
                        </Link>
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
                    <div className="bottom-sheet-inner !border-2 !border-cyan-500">
                        <div className="bottom-sheet-close" onClick={() => { setDialogOpen(false) }}>
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
                        <div className="bottom-sheet-scroll" >
                            {isDialogOpen && <WalletConnectDialog user={user} setDialogOpen={setDialogOpen} />}
                        </div>
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
        </Proivders>
    )
}

export default AirDrop
