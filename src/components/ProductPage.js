import React,{ Component } from 'react'
import Product from './Product'
import { Consumer } from './context'


class ProductPage extends Component {

    render () {
        return (
            <Consumer>
                {value=>{
                    console.log(value)
                    return(
                    <div className="product-page">
                    {
                        value.storeProducts.map(item => {
                            return <Product id = {item.id} details = {item}  />
                            })
                    }
                    </div>)       
                }}
            
            </Consumer>
        )
    }
}

export default ProductPage;