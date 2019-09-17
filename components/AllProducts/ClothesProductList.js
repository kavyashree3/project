import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import ClothesProduct from './ClothesProduct';
import Title from '../Title'

export default class ClothesProductList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-5"> {/* padding from bottom */}
             <div className="container"> {/* bootstrap class */}
                <Title  title5="Clothes"/>
                <div className="row"> 
                <ProductConsumer>                        
                    {(value)=>{return value.clothesProducts.map(product=>{return <ClothesProduct key={product.id} product={product}/>})}}                        
                </ProductConsumer>
                </div>
             </div>
            </div>   
        </React.Fragment>
        )
    }
}
