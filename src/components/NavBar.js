import React from 'react'
import logo from '../logo.svg'

function NavBar(){
    return(
        <header className>
            <img src ={logo} alt ="logo" />
            <h1>e-shop</h1>
            <a href ="/cart"><i></i>cart</a>
        </header>
    )
}

export default NavBar;