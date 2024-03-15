import React from 'react'

// STYLES
import '../../styles/navbar.css'

// ICONS
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <IoMenuOutline className='menuButton'/>
        <img className='navbarLogo' src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/logo.png" alt="" />
        <div className='navLinksContainer'>
            <ul className='navLinksInner'>
                <li className='navLink'>HOME</li>
                <li className='navLink'>WHAT IS RENTAFRIEND</li>
                <li className='navLink'>FIND A FRIEND</li>
                <li className='navLink'>SIGN IN</li>
                <li className='navLink joinNowLink'>JOIN NOW</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar