import React from 'react'
import BlackLogo from '../DNK/BlackLogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import './Components.css';

function NavItems() {
  return (
    <div> <div className='product-link-bar'>
    <div className='product-left-link'>
        <div>
        <NavLink style={{textDecoration :"none", color:"white"}} to="/">
            <img src={BlackLogo} alt="logo" />
        </NavLink>
        </div>  

            <div>
                <ul>
            <li><NavLink style={{textDecoration :"none", color:"black"}} to="/everything">EVERYTHING</NavLink></li>
                    <li>WOMEN</li>
                    <li>MEN</li>
                    <li>ACCESSORIES</li>
                </ul>
            </div>
        
    </div>

    <div className='product-right-link'>
        <ul>
            <li><NavLink style={{textDecoration :"none", color:"black"}} to="/about">ABOUT</NavLink></li>
            <li><NavLink style={{textDecoration :"none", color:"black"}} to="/contact">CONTACT US</NavLink></li>
            <li> < ShoppingCartIcon/></li>
            <li>< PersonIcon/></li>
        </ul>
    </div>

</div></div>
  )
}

export default NavItems