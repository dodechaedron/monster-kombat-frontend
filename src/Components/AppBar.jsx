import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getExchangeIcon } from '../Pages/Exchange';
import { PointContext } from '../state/PointContext';
import { EXCHANGES } from '../constants';

function AppBar() {

    const { exchange } = useContext(PointContext);
    const { pathname } = useLocation();

    return (
        <div className="z-40 app-bar">
            <nav className="app-bar-nav">
                <Link to="/" className={`app-bar-item ${pathname == '/' ? 'router-link-active router-link-exact-active' : 'no-select'}`}>
                    <div className="app-bar-item-image">
                        <div className="exchange-image is-border-6">
                            {getExchangeIcon(exchange)}
                        </div>
                    </div>
                    <p>Marketplace</p>
                </Link>
                <Link to="/mine" className={`app-bar-item ${pathname == '/mine' ? 'router-link-active router-link-exact-active' : 'no-select'}`}>
                    <div className="app-bar-item-image">
                        <div className="icon icon-mine"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28">
                            <path fill="currentColor" d="M25.8 23.262 11.645 9.108l.645-.646a.9.9 0 0 0 .239-.838c3.763-3.048 7.67-4.783 10.578-4.795-2.993-1.762-7.938-.65-12.47 2.707l-.259-.259a.903.903 0 0 0-1.275 0l-.645.645L7.06 4.527a.7.7 0 0 0-.511-.2c-1.105 0-2.818 1.942-2.026 2.726l1.4 1.4-.647.648a.905.905 0 0 0 0 1.274l.26.26c-3.358 4.53-4.47 9.474-2.707 12.464.012-2.907 1.747-6.812 4.795-10.574a.9.9 0 0 0 .838-.239l.648-.646 14.162 14.158c.139.141.315.202.51.202 1.097 0 2.802-1.947 2.018-2.738">
                            </path>
                        </svg></div>
                    </div>
                    <p>Harvest</p>
                </Link>
                <Link to="/friends" className={`app-bar-item ${pathname == '/friends' ? 'router-link-active router-link-exact-active' : 'no-select'}`}>
                    <div className="app-bar-item-image">
                        <div className="icon icon-friends"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 28 28">
                            <path fill="currentColor" d="M7 16.2v.2c0 .1-.1.1-.1.1l-.1.1h-5c-.2 0-.4-.1-.5-.2-.2-.1-.3-.3-.3-.5v-.4c0-.1.1-.3.2-.4.8-1 1.8-1.8 3-2.3-.5-.5-.9-1.1-1.2-1.7-.2-.7-.3-1.4-.2-2.1-.1-.6.2-1.3.6-1.8s.9-1.1 1.5-1.4c.6-.3 1.3-.5 2-.5s1.4.1 2 .5c.7.2 1.2.7 1.6 1.2.4.6.7 1.2.8 1.9v.3c0 .1-.1.1-.2.2-1.2.6-2.2 1.5-3 2.6-.7 1.1-1.1 2.4-1.1 3.8v.4zm19.9-1c-.8-1-1.8-1.8-3-2.3.5-.5.9-1.1 1.2-1.7.2-.7.3-1.4.2-2.1-.1-.7-.3-1.4-.7-1.9-.4-.6-.9-1.1-1.5-1.4-.6-.3-1.3-.5-2-.5s-1.4.1-2 .5c-.7.2-1.2.7-1.6 1.2-.4.6-.7 1.2-.8 1.9v.3c0 .1.1.1.2.2 1.2.6 2.2 1.5 3 2.6.7 1.1 1.1 2.4 1.1 3.8V16.4c0 .1.1.1.1.1l.1.1h5c.2 0 .4-.1.5-.2.2-.1.3-.3.3-.5v-.4c.1-.1 0-.2-.1-.3zm-9.7 4.7c.9-.7 1.5-1.6 1.8-2.6.3-1 .3-2.2-.1-3.2s-1-1.9-1.9-2.6c-.9-.6-2-1-3.1-1s-2.2.3-3.1 1c-.8.6-1.4 1.5-1.8 2.6-.4 1-.4 2.2-.1 3.2.3 1 1 2 1.8 2.6-1.5.7-2.8 1.8-3.7 3.3v.4c0 .1 0 .3.1.4l.3.3c.1.1.3.1.4.1h12.3c.2 0 .3 0 .4-.1l.3-.3c.1-.1.1-.3.1-.4 0-.2 0-.3-.1-.4-.8-1.5-2.1-2.6-3.6-3.3z">
                            </path>
                        </svg></div>
                    </div>
                    <p>Friends</p>
                </Link>
                <Link to="/earn" className={`app-bar-item ${pathname == '/earn' ? 'router-link-active router-link-exact-active' : 'no-select'}`}>
                    <div className="app-bar-item-image">
                        <div className="icon icon-earn"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 28 28">
                            <path fill="currentColor" d="M20.1 9.8v-.6c0-2.7-4.1-4.8-9.6-4.8S.9 6.4.9 9.2v4.4c0 2.3 2.9 4.1 7 4.6v.6c0 2.7 4.1 4.8 9.6 4.8s9.6-2.1 9.6-4.8v-4.4c0-2.2-2.8-4-7-4.6zm-14 6.3c-2.1-.6-3.5-1.6-3.5-2.5V12c.9.6 2.1 1.1 3.5 1.5v2.6zm8.8-2.6c1.4-.3 2.6-.9 3.5-1.5v1.5c0 .9-1.4 1.9-3.5 2.5v-2.5zm-1.8 7.8c-2.1-.6-3.5-1.6-3.5-2.5v-.5h2.1c.5.2.9.3 1.4.4v2.6zm0-4.9c-.9.1-1.7.2-2.6.2-.9 0-1.8-.1-2.6-.2v-2.6c.9.1 1.7.2 2.6.2.9 0 1.8-.1 2.6-.2v2.6zm7 5.3c-1.7.3-3.5.3-5.2 0v-2.6c.9.1 1.7.2 2.6.2.9 0 1.8-.1 2.6-.2v2.6zm5.3-2.9c0 .9-1.4 1.9-3.5 2.5v-2.6c1.4-.3 2.6-.9 3.5-1.5v1.6z">
                            </path>
                        </svg></div>
                    </div>
                    <p>Earn</p>
                </Link>
                <Link to="/airdrop" className={`app-bar-item ${pathname == '/airdrop' ? 'router-link-active router-link-exact-active' : 'no-select'}`}>
                    <div className="app-bar-item-image">
                        <picture className="is-token">
                            <source srcSet="./images/icons/hamster-coin.png" type="image/png" alt="Monster Kombat" />
                            <img className="img-responsive" src="./images/icons/hamster-coin.png" alt="Monster Kombat" />
                        </picture>
                    </div>
                    <p>Airdrop</p>
                </Link>
            </nav>
        </div>
    )
}

export default AppBar;