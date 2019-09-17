/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
// List of all the products
import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
//import {storeProducts} from './Data'; --> importing array called storeProducts from Data.js, did this before doing Context.js
import {ProductConsumer} from './Context';
export default class ProductList extends Component {
    /* example import used before Context.js */
    /*
     state={
          products: storeProducts
      };
    */
    render() {
        //console.log(this.state.products); --> displaying all the data in console
        return (
            <React.Fragment>
                <div className="py-5"> {/* padding from bottom */}
                 <div className="container"> {/* bootstrap class */}
                    <Title name="e" title="-kart"/>
                    <div className="row"> {/* Row for the Products and we create a new file for the title of the products */}
                    <ProductConsumer>
                        {/* Always remember no 'props' required for ContextAPI */}
                        {(value)=>{                            
                            {/* here 'products' is the product from the provider */}
                            return value.products.map(product=>{
                                return <Product key={product.id} product={product}/>                                
                            {/*That means for each & every items in the productList i.e storeProducts array from Context.js we return the data from product */}
                            }) 
                        }}
                        {/* We must always use a function to get data from Context here (hello is the parameter thasssst we recieve from Context and {hello} is the 'value' attribute in the Context)*/}
                    </ProductConsumer>
                    </div>
                 </div>
                </div>        
            </React.Fragment>            
        );
    }
}
//<Product />
/* 
   in <ProductConsumer> the outer  return is for the entire list of items and the inner return is for the single items, when the array loops
   all the product detials is given to the App.js.
*/