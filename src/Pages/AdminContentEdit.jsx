import { useContext, useState } from 'react'
import AppBar from '../Components/AppBar'
import { PointContext } from '../state/PointContext'
import { FULL_ENERGY, MULTI_TAPS } from '../constants'
import FullEnergyDialog from '../Components/FullEnergyDialog/FullEnergyDialog'
import MultiTap from '../Components/MultiTap/MultiTap'
import EnergyLimitDialog from '../Components/EnergyLimitDialog/EnergyLimitDialog'

function AdminContentEdit() {
    const { user, fullEnergy, setFullEnergy, setEnergy, energyLimit, point, setPoint, setEnergyLimit, level } = useContext(PointContext);

    const [isDialogOpen, setDialogOpen] = useState("");

    return (
        <div>
            <main className="main">
                <div className="inner settings">
                    <div className="settings-title">Choose exchange</div>
                    <button className={`settings-item`} >
                        <div className="settings-item-image">
                            <div className="exchange-image is-binance">Binance</div>
                        </div>
                        <div className="settings-item-content">
                            <p>Binance</p>
                        </div>
                        <div className="settings-item-action">
                            <div className="icon is-24">Binance</div>
                        </div>
                    </button>                    
                </div>
            </main>
            <AppBar />            
        </div>
    )
}

export default AdminContentEdit
