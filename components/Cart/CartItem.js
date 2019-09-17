/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './CartItem.css'

export default function CartItem({item,value}) {
    const {id,title,img,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">            
                <img src={img} style={{width:'5rem'}} className="img-fluid" alt="image"/>            
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div style={{textAlign:'center'}}> <span>{title}</span></div>   {/* d-lg-none means in large screen it doesnt display */}        
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div> <span>{price}</span></div>           
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-trash-b-128.png" width="20" height="20" alt="dustbin"></img>
                </div>           
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: $ {total}</strong>           
            </div>
        </div>
    );
}
