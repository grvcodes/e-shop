import React from 'react'
import pic from '../pic.png';

function NavBar(){
    return(
        <header className>
            <img src ={pic} alt ="logo" />
            <h1>e-shop</h1>
            <a href ="/cart"><i></i>cart</a>
        </header>
    )
}

export default NavBar;