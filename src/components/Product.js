import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            displayDetails : (window.outerWidth > 1000) ? true : false
        }
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
                <span><i>+</i><i>i</i></span>
            </div>
        )
    }
}


export default Product;