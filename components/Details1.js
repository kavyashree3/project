import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value=>{
                        const {id,img,company,title,inCart,count,total,price,info}=value.detailProduct1;
                    
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end of title */}
                            {/* Product info */}
                            <div className="row">
                                {/* Product image */}
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} alt="product" className="img-fluid"/>
                                </div>                                
                                {/* Product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
                                        made by: <span className="text-uppercase">{company}</span> 
                                    </h4>                                    
                                    <h4>
                                        <strong>price: <span>$</span>{price}</strong>
                                    </h4>                                    
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0 text-justify">
                                        Product Details:<hr/>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                        <div>
                                            {/* Buttons                                            
                                                <button className="btn btn-outline-warning ml-2"> Add To Cart</button> 
                                            */} 
                                            <button disabled={inCart?true:false} 
                                            className="btn btn-outline-warning ml-2" 
                                            onClick={()=>{
                                                value.addHomeToCart(id);
                                            }}>
                                                {inCart?"In Cart":"Add to Cart"}
                                            </button>
                                            
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}}
                </ProductConsumer>
            </div>
        )
    }
}
