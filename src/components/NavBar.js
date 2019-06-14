import React from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
function NavBar(){
    return(
        <header className>
            <img src ={logo} alt ="logo" />
            <h1>e-shop</h1>
            <Link  to ="/cart"><i></i>cart</Link>
        </header>
    )
}

export default NavBar;