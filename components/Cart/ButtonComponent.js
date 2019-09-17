import React from 'react'

export default function ButtonComponent({values}) {
    const {placeOrder} = values;
    return (
        <div className="col-10 mt-10 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">   
        <button className="btn btn-outline-primary" onClick={()=>placeOrder()}>
            Buy Now
        </button>        
        </div>
    )
}
