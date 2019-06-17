import React from 'react'
import shopping_bag from './icons/svg/shopping_bag.svg'
import cart from './icons/svg/cart.svg'
import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <header className>
            <img className="icon" src ={shopping_bag} alt ="logo" />
            <h1>e-shop</h1>
            <Link  to ="/cart"><img src={cart}></img>cart</Link>
        </header>
    )
}

export default NavBar;