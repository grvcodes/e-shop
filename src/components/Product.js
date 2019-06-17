import React, { Component } from 'react';
import addToCart from './icons/svg/add_to_cart.svg'
import incart from './icons/svg/incart.svg'
class Product extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return (
            <div className="product">
                <section>
                    <img src = {`./${this.props.details.img}`} alt = "product"/><br />
                    <h3 className="specials">{this.props.details.title}</h3>  <h2>by {this.props.details.company}</h2>
                    <br />
                    <strong>${this.props.details.price}</strong>
                </section>
                <p>{this.props.details.info}</p>
                <div className="product-bottom">
                    {this.props.details.inCart ? <span>
                                                   <span>
                                                   <img src ={incart} 
                                                         
                                                     />   
                                                   </span>
                                                  </span> 
                                               : <span>
                                                   <img src ={addToCart} 
                                                        onClick = {()=>this.props.addToCart(this.props.id)} 
                                                    />
                                                  </span> 
                    }        
                </div>
                
            </div>
        )
    }
}


export default Product;