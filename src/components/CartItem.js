import React from 'react'
const CartItem = (props)=>{
    
    return(
        <div className='cart-item'>
        
            <span className="a">
                <img className="cart-photo" src = {props.data.img} alt="product" />
                <h4>{props.data.title}</h4>
            </span>
            <span className="price">
                <h3>price: <span>${props.data.price}</span></h3>
                <h3>total price:<span>${props.data.price*props.count}</span></h3>
            </span>
            <span className="wrapper"> 
                quantity:{props.count}
                <button onClick ={()=>props.increment(props.data.id)}><i>increse</i></button>
                <button onClick ={()=>props.decrement(props.data.id)}><i>decrease</i></button>
            </span>
        </div>
        )
            
}

export default CartItem