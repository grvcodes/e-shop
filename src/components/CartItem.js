import React from 'react'
const CartItem = (props)=>{
    
    return(
        <div className='cartitem'>
            <img src={props.img} alt="product" />
            <span>{props.count}</span>
        </div>
        )
            
}

export default CartItem