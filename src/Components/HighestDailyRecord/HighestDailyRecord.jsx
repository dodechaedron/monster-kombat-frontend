import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../../constants';
import toast from 'react-hot-toast';

const HighestDailyRecord = ({ setUser, setDialogOpen }) => {

    const navigate = useNavigate();
    const handleClaim = async () => {
        
        try {
            const response = await axios.post(`${BACKEND_URL}/api/user/daily-record`, {
            });

            const { data } = response;
            
            if(data?.user) {
                setUser(data?.user)
            }
            toast.success("Successfully Claimed.")

        }
        catch (e) {
            toast.error("Claim Failed.")
            console.log('app@handleParticipate', e?.response?.data?.message ?? e.message);
        }
        finally {
            setDialogOpen(false);
            navigate('/');
        }
        return false;
    }

    return (
        <div className="bottom-sheet-scroll">
            <div className="bs-content">
                <div className="bs-content-image !w-full">
                    <img src="/images/icons/beer.png" />
                </div>
                <div className="boost-profit-target">
                    <p>Congratulations! </p>
                    <p>You Reached a New Daily Record! 🥇</p>
                    <p className='my-3'>You Won 10'000 Coins</p>
                </div>
                <button
                    className="bottom-sheet-button button button-primary button-large"
                    onClick={handleClaim}
                >
                    <span>Claim Now</span>
                    <img className="coin img-responsive is-28" src="/images/icons/heart.svg" />
                </button>
                <Link className='text-[#FFD300] underline mt-6' to={'/previous-winners'}>Previous Winners</Link>
            </div>
        </div>
    )
}

export default HighestDailyRecord