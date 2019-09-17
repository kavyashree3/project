import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../Context';
import ButtonComponent from './ButtonComponent';
import BuyList from './BuyList';

export default class Cart extends Component {
    render() {
        return (
            <section style={{marginTop:'60px'}}>
            <ProductConsumer>
            {value=>{
                const {cart}=value;
                if(cart.length>0)
                {
                    return(
                        <React.Fragment>
                        <Title name6="your" title6="kart"/>
                        <CartColumns/>
                        <CartList values={value}/>
                        <CartTotals values={value}/>
                        <ButtonComponent values={value}/>
                        <BuyList values={value}/>
                        </React.Fragment>
                    )}
                    else{
                        return <EmptyCart/>
                    }
                }}        
                </ProductConsumer>
            </section>
        )
    }
}
