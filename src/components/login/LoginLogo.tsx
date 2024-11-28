import React from 'react'
import MainLogo from '../../assets/images/login/mainLogo.png'
import MainLogoCenter from '../../assets/images/login/mainLogoCenter.png'
import './LoginLogo.css'
const LoginLogo = () => {
  //* check
  return (
    <div className="MainLogoDiv">
      <img className="MainLogo" src={MainLogo} alt="Logo"></img>
      <img className="MainMovedLogo" src={MainLogoCenter} alt="Logo"></img>
    </div>
  )
}

export default LoginLogo
