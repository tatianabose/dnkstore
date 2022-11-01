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
        <NavLink style={{textDecoration :"none", color:"white"}} to="/">
            <img src={LogoWhite} alt="logo" />
        </NavLink>
        </div>  

            <div>
                <ul>
            <li><NavLink style={{textDecoration :"none", color:"white"}} to="/everything">EVERYTHING</NavLink></li>
                    <li><NavLink style={{textDecoration :"none", color:"white"}} to="/women">WOMEN</NavLink></li>
                    <li><NavLink style={{textDecoration :"none", color:"white"}} to="/men">MEN</NavLink></li>
                    <li><NavLink style={{textDecoration :"none", color:"white"}} to="/accessories">ACCESSORIES</NavLink></li>
                </ul>
            </div>
        
    </div>

    <div className='right-link'>
        <ul>
            <li><NavLink style={{textDecoration :"none", color:"white"}} to="/about">ABOUT</NavLink></li>
            <li><NavLink style={{textDecoration :"none", color:"white"}} to="/contact">CONTACT US</NavLink></li>
            <li> < ShoppingCartIcon/></li>
            <li>< PersonIcon/></li>
        </ul>
    </div>

</div></div>
  )
}

export default NavItems