import React from 'react'
import LogoWhite from '../DNK/LogoWhite.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import './Components.css';

function NavItems() {
  return (
    <div> <div className='link-bar'>
    <div className='left-link'>
        <div>
            <img src={LogoWhite} alt="logo" />
        </div>

            <div>
                <ul>
                    <li>EVERYTHING</li>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>ACCESSORIES</li>
                </ul>
            </div>
        
    </div>

    <div className='right-link'>
        <ul>
            <li><NavLink style={{textDecoration :"none", color:"white"}} to="/about">ABOUT</NavLink></li>
            <li>CONTACT US</li>
            <li> < ShoppingCartIcon/></li>
            <li>< PersonIcon/></li>
        </ul>
    </div>

</div></div>
  )
}

export default NavItems