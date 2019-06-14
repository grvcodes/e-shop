import React,{ Component } from 'react'
import {storeProducts as storeData}from '../data'

const Context = React.createContext();

export class Provider extends Component{

    addToCart= (id)=>{
        let newItem={id : id,
                  count:1
                 };
        let temp = [...this.state.cart,newItem]
        this.setState({cart : temp})
        this.state.storeProducts[id-1].inCart=true;
    }
    increment = (id)=>{
        let temp = []
        for(let i in this.state.cart){
            let item = this.state.cart[i];
            if(item.id == id){
                let newData = {id: item.id,count: item.count+1};
                temp = [...temp,newData];
            }
            else{
                temp = [...temp, item]
            }
        }
        this.setState({cart:temp})
        
    }
    decrement = (id)=>{
        let temp = []
        for(let i in this.state.cart){
            let item = this.state.cart[i];
            if(item.id == id){
                
                if(item.count > 1){
                    let newData = {id: item.id,count: item.count-1}
                    temp = [...temp,newData];    
                }else{
                    this.state.storeProducts[id-1].inCart=false;
                    console.log('removed from cart')
                }
            }
            else{
                temp = [...temp, item]
            }
        }
        this.setState({cart:temp})
        
    }
    
    state={
        storeProducts:storeData,
        cart: [],
        addToCart : this.addToCart,
        increment: this.increment,
        decrement: this.decrement
    };

    render(){
        return(
        <Context.Provider 
            value ={{...this.state,
                     
                    }} 
        >
            {this.props.children}
        </Context.Provider>
        )}
}

export const Consumer = Context.Consumer;