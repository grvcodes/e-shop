import React,{ Component } from 'react'
import Product from './Product'
class ProductPage extends Component {
    render () {
        return (
            <div className="product-page">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
}

export default ProductPage;