import React from 'react'
import logo from "../Assets/logoforinfo.png"
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-content">
            <div className="header-content-1">
                <img src={logo} alt="" height={'40px'} width={'35px'} />
            </div>
            <div className="header-content-2">
                Sarathi Ai
            </div>
            <div className="header-content-3">
                <div className="two-profile">
                    <div className="profile-1"> SA</div>
                    <div className="profile-2">Y</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header