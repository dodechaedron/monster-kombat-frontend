import React from "react";

const ComboInfoDialog = ({ setDialogOpen }) => {
    return (
        <div className="bottom-sheet-scroll">
            <div className="bs-content">
                <div className="bs-content-image is-daily-combo-info">
                    <div className="" />
                    <img src="/images/daily-combo-info.png" />
                </div>
                <div className="bs-content-subtitle">
                    Find 3 combo cards and upgrade them up to get a prize!
                </div>
                <button
                    className="bottom-sheet-button button button-primary button-large"
                    onClick={() => {
                        setDialogOpen("");
                    }}
                >
                    <span>I hope I'm lucky</span>
                    <div className="icon icon-heart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            style={{ enableBackground: "new 0 0 24 24" }}
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M22.5 8.8c0 6.6-9.7 11.9-10.1 12.1-.2.1-.3.1-.4.1s-.2 0-.4-.1c-.4-.2-10.1-5.5-10.1-12.1 0-1.5.6-3 1.7-4.1S5.8 3 7.3 3c1.9 0 3.6.8 4.7 2.2C13.1 3.8 14.8 3 16.7 3c1.5 0 3 .6 4.1 1.7 1.1 1.1 1.7 2.6 1.7 4.1z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default ComboInfoDialog;
