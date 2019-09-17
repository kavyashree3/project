import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import HomeProduct from './HomeProduct';
import Title from '../Title'

export default class HomeProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5"> {/* padding from bottom */}
                 <div className="container"> {/* bootstrap class */}
                    <Title name1="Home" title1=" Appliances"/>
                    <div className="row"> 
                    <ProductConsumer>                        
                        {(value)=>{     
                            return value.homeProducts.map(product=>{
                                return <HomeProduct key={product.id} product={product}/>                              
                            }) 
                        }}                        
                    </ProductConsumer>
                    </div>
                 </div>
                </div>   
            </React.Fragment>
        );
    }
}
