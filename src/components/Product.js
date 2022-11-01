import React from 'react'
import YellowShoes from '../DNK/YellowShoes.jpg';
import Rating from '@mui/material/Rating';
import { NavLink } from "react-router-dom";
function Product(props) {
  return (
    <div>

      <div className='product'>
      <NavLink style={{textDecoration :"none", color:"white"}} to="/product/desc">
        
        <img src={YellowShoes} alt="ys" />
        </NavLink>
        <h4>{props.brand}</h4>
        <h5>{props.gender}</h5>
        <div><p>{props.price1}</p>-
          <p>{props.price2}</p></div>
        <Rating size='small' name="read-only" value={0} readOnly />
      </div>

    </div>
  )
}

export default Product