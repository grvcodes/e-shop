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
                                <Link to='/'> Start Shopping</Link> 
                                <span> : ) </span>                          
                             </p>
                         </div>
                     )   
                    }
                    let total =0;
                    value.cart.forEach(element => {
                        total += value.storeProducts[element.id-1].price * element.count;
                        
                    });
                    return(
                    <>
                    <div className="cart-page">
                    {
                        
                        value.cart.map(item => {
                            
                            let data = value.storeProducts[item.id-1];
                            
                            return (
                                    <CartItem data ={data}
                                             count = {item.count}
                                             increment ={value.increment}
                                             decrement ={value.decrement}
                                    >
                                    </CartItem>
                                   )
                            })
                    }
                    </div>
                    <div className="cart-page-footer">
                        <div>
                            <h3>Cart Total:</h3>
                            <span>$ {total}</span>
                        </div>
                    </div>
                    </>)       
                }}
            </Consumer>
        )
    }
        
}
export default Cart