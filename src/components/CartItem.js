import React from 'react'
const CartItem = (props)=>{
    
    return(
        <div className='cart-item'>
        
            <span className="a">
                <img className="cart-photo" src = {props.data.img} alt="product" />
                <h4>{props.data.title}</h4>
            </span>
            <span className="price">
                <h3>${props.data.price}</h3>
            </span>
            <span className="wrapper"> 
                <span>quantity:{props.count}</span> 
                <button onClick ={()=>props.increment(props.data.id)}><i>increse</i></button>
            </span>
        </div>
        )
            
}

export default CartItem