import React from 'react'
import decrease from './icons/svg/decrease.svg'
import dollar from './icons/svg/dollar.svg'

const CartItem = (props)=>{
    
    return(
        <div className='cart-item'>

            <span className="a">
                <img className="cart-photo" src = {props.data.img} alt="product" />
                <h4>{props.data.title}</h4>
            </span>
            <span className="price">
                <h3>price: <span><img className="currency" src={dollar}></img>{props.data.price}</span></h3>
                <h3>total price:<span><img className="currency" src={dollar}></img>{props.data.price*props.count}</span></h3>
            </span>
            <span className="wrapper"> 
                quantity:{props.count}
                <button onClick ={()=>props.increment(props.data.id)}><img className="increase" src={decrease}></img></button>
                <button onClick ={()=>props.decrement(props.data.id)}><img src={decrease}></img></button>
                <button onClick ={()=>props.remove(props.data.id)} className ="remove-button">Remove from cart</button>
            </span>
        </div>
        )
            
}

export default CartItem