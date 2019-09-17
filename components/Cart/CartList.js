import React from 'react';
import CartItem from './CartItem';

export default function CartList({values}) { //recieving props from CartItem.js, sending props to Cart.js
    const {cart}=values;
    console.log(values,cart)
    return (
        <div className="container-fluid">
        {cart.map(item=>{return <CartItem key={item.id} item={item} value={values}/>})}        
        </div>
    )
}
// cart array (in Context) will have all the values stored of the specified item when added to the cart. 