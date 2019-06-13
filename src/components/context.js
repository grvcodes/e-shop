import React,{ Component } from 'react'
import {storeProducts as storeData}from '../data'

const Context = React.createContext();

export class Provider extends Component{
    state={
        storeProducts:storeData
    };
    render(){
        return(
        <Context.Provider 
            value ={{...this.state,
                     addToCart:this.addToCart
                    }} 
        >
            {this.props.children}
        </Context.Provider>
        )}
}

export const Consumer = Context.Consumer;