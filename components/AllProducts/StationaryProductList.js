import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import StationaryProduct from './StationaryProduct';
import Title from '../Title'

export default class StationaryProductList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-5"> {/* padding from bottom */}
             <div className="container"> {/* bootstrap class */}
                <Title name4="Stationary" title4=" Products"/>
                <div className="row"> 
                <ProductConsumer>                        
                    {(value)=>{     
                        return value.stationaryProducts.map(product=>{
                            return <StationaryProduct key={product.id} product={product}/>                              
                        }) 
                    }}                        
                </ProductConsumer>
                </div>
             </div>
            </div>   
        </React.Fragment>
        )
    }
}
