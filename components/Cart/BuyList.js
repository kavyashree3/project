import React from 'react'
import OrderPlaced from './OrderPlaced';

export default function BuyList({values}) {
    const {cart}=values;
    console.log(values,cart)
    return (
        <div className="container-fluid">
        {cart.map(item=>{return <OrderPlaced key={item.id} item={item} value={values}/>})}        
        </div>
    )
}
