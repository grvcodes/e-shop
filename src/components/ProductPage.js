import React,{ Component } from 'react'
import Product from './Product'
import { storeProducts } from '../data.js'
class ProductPage extends Component {
constructor(){
    super()
    this.state={
        products : storeProducts
    }
}
    render () {
        return (
            <div className="product-page">
                {
                    this.state.products.map(item => {
                        return <Product details = {item} />
                        })
                }
            </div>
        )
    }
}

export default ProductPage;