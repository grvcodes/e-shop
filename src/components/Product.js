import React, { Component } from 'react';
import pic from '../pic.png';

class Product extends Component {
    render () {
        return (
            <div className="product">
                <img src = {pic} alt ="product" />
                <h3 className="specials">product name $20</h3>
                <h3>Manufacturer</h3>
                <h4>supplier</h4>
            </div>
        )
    }
}

export default Product;