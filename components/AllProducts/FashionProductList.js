import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import FashionProduct from './FashionProduct';
import Title from '../Title'

export default class FashionProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5"> {/* padding from bottom */}
                 <div className="container"> {/* bootstrap class */}
                    <Title title2="Fashion"/>
                    <div className="row"> 
                    <ProductConsumer>                        
                        {(value)=>{     
                            return value.fashionProducts.map(product=>{return <FashionProduct key={product.id} product={product}/>}) 
                        }}                        
                    </ProductConsumer>
                    </div>
                 </div>
                </div>   
            </React.Fragment>
        );
    }
}