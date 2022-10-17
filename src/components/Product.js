import React from 'react'
import YellowShoes from '../DNK/YellowShoes.jpg';
import  Rating  from '@mui/material/Rating';
function Product(props) {
  return (
    <div>
        <div className='product'>
        <img src={YellowShoes} alt="ys"/>
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