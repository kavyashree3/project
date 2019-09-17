import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import ElectronicProduct from './ElectronicProduct';
import Title from '../Title'

export default class ElectronicProductList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="py-5"> {/* padding from bottom */}
             <div className="container"> {/* bootstrap class */}
                <Title name1="Electronic" title1=" Items"/>
                <div className="row"> 
                <ProductConsumer>                        
                    {(value)=>{     
                        return value.electronicProducts.map(product=>{
                            return <ElectronicProduct key={product.id} product={product}/>                              
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
