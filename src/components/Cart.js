import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Consumer } from './context'
import CartItem from './CartItem'

class Cart extends Component{
    render(){
        return (
            <Consumer>
                {value=>{
                    console.log(value)
                    if(value.cart.length==0){
                     return(
                         <div className ="empty-cart">
                            <p>Your Cart is Empty
                                <Link to='/'>Start Shopping</Link>                            
                             </p>
                         </div>
                     )   
                    }
                    return(
                    <div className="cart-page">
                    {
                        value.cart.map(item => {
                            let data = value.storeProducts[item.id-1];
                            return <CartItem data ={data}
                                             count = {item.count}
                                             increment ={value.increment}
                                             decrement ={value.decrement}
                                    >
                                    </CartItem>
                            })
                    }
                    </div>)       
                }}
            
            </Consumer>
        )
    }
        
}
export default Cart