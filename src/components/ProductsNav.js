import React from 'react'
import BlackLogo from '../DNK/BlackLogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from "react-router-dom";
import './Components.css';

function NavItems() {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "800" : "600",
            color: isActive ? "#0075BE" : "#000",

            textDecoration: "none",
            borderWidth: "50%",
        };
    };

    return (
        <div> <div className='product-link-bar'>
            <div className='product-left-link'>
                <div>
                    <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
                        <img src={BlackLogo} alt="logo" />
                    </NavLink>
                </div>

                <div>
                    <ul>
                        <li><NavLink style={navLinkStyles} to="/everything">EVERYTHING</NavLink></li>
                        <li><NavLink style={navLinkStyles} to="/women">WOMEN</NavLink></li>
                        <li><NavLink style={navLinkStyles} to="/men">MEN</NavLink></li>
                        <li><NavLink style={navLinkStyles} to="/accessories">ACCESSORIES</NavLink></li>
                    </ul>
                </div>

            </div>

            <div className='product-right-link'>
                <ul>
                    <li><NavLink style={{ textDecoration: "none", color: "black" }} to="/about">ABOUT</NavLink></li>
                    <li><NavLink style={{ textDecoration: "none", color: "black" }} to="/contact">CONTACT US</NavLink></li>
                    <li> < ShoppingCartIcon /></li>
                    <li>< PersonIcon /></li>
                </ul>
            </div>

        </div></div>
    )
}

export default NavItems