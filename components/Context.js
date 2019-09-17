import React, { Component } from 'react';
import {storeProducts,detailProduct,homeItems,fashionItems,electronicItems,stationaryItems,clotheItems,detailProduct1,detailProduct2,
        detailProduct3,detailProduct4,detailProduct5} from './Data';

const ProductContext = React.createContext(); 
const ProductConsumer = ProductContext.Consumer; //Consumer

//Place the ProductContext.Provider on top of the entire application.i.e in index.js
//Do the same thing as done in ProductList i.e getting data from the Data.js and put it in an array.
class ProductProvider extends Component {
    state={
        //products:storeProducts,  
        /* 
           assigning the objects to the variables, means passing them as a reference, storeProducts is the array of objects. 
           products:storeProducts --> means reference is getting passed. Its not a copy of the original array.
           This problem has to be solved. 
        */
        products:[], // This is to solve the problem which was seen in tester.
        homeProducts:[],
        fashionProducts:[],
        electronicProducts:[],
        stationaryProducts:[],
        clothesProducts:[],
        detailProduct:detailProduct,
        detailProduct1:detailProduct1,
        detailProduct2:detailProduct2,
        detailProduct3:detailProduct3,
        detailProduct4:detailProduct4,
        detailProduct5:detailProduct5,
        cart:[],
        buyProduct:[],
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        confirmOrder:false,
        logToolbar:false,
    }
    componentDidMount()
    {
        this.setProducts();
        this.setHomeProducts();
        this.setFashionProducts();
        this.setElectronicProducts();
        this.setStationaryProducts();
        this.setClothesProducts();
    }
    addToCart = (id) =>{ // To add the item to the cart
        //console.log(`hello from addToCart ${id}`);
        let tempcartproducts=[...this.state.products]; // accessing all 'products' in state.
        const index = tempcartproducts.indexOf(this.getItem(id));
        const product = tempcartproducts[index]; // specific item with index.
        product.inCart=true; // changing properties.
        product.count=1;
        const price = product.price;
        product.total=price;    
        this.setState(()=>{return{products:tempcartproducts,cart:[...this.state.cart,product],buyProduct:[...this.state.cart,product]};},()=>{this.addTotals()});
    }

        // Adding Home itmes to cart
        addHomeToCart = (id) =>{
            let tempcarthomeproducts=[...this.state.homeProducts];
            const index1 =  tempcarthomeproducts.indexOf(this.getHomeItem(id));
            const product1 = tempcarthomeproducts[index1];
            product1.inCart=true; // changing properties.
            product1.count=1
            const price1 = product1.price;
            product1.total=price1;    
            this.setState(()=>{return{homeProducts:tempcarthomeproducts,cart:[...this.state.cart,product1],buyProduct:[...this.state.cart,product1]};},()=>{console.log(this.state)});
        }
        //adding fashion items to cart
        addFashionToCart = id =>{
            let tempcartfashionproducts=[...this.state.fashionProducts];
            const index2 =  tempcartfashionproducts.indexOf(this.getFashionItem(id));
            const product2 = tempcartfashionproducts[index2];
            product2.inCart=true; // changing properties.
            product2.count=1
            const price2 = product2.price;
            product2.total=price2;    
            this.setState(()=>{return{fashionProducts:tempcartfashionproducts,cart:[...this.state.cart,product2],buyProduct:[...this.state.cart,product2]};},()=>{console.log(this.state)});
        }
        //Adding Electronic items to cart
        addElectronicToCart = id =>{
            let tempcartelectronicproducts=[...this.state.electronicProducts];
            const index3 =  tempcartelectronicproducts.indexOf(this.getElectronicItem(id));
            const product3 = tempcartelectronicproducts[index3];
            product3.inCart=true; // changing properties.
            product3.count=1
            const price3 = product3.price;
            product3.total=price3;    
            this.setState(()=>{return{electronicProducts:tempcartelectronicproducts,cart:[...this.state.cart,product3],buyProduct:[...this.state.cart,product3]};},()=>{console.log(this.state)});
        }
        //Adding fashion items to cart
        addStationaryToCart=id=>{
            let tempcartstationaryproducts=[...this.state.stationaryProducts];
            const index4 =  tempcartstationaryproducts.indexOf(this.getStationaryItem(id));
            const product4 = tempcartstationaryproducts[index4];
            product4.inCart=true; // changing properties.
            product4.count=1
            const price4 = product4.price;
            product4.total=price4;    
            this.setState(()=>{return{stationaryProducts:tempcartstationaryproducts,cart:[...this.state.cart,product4],buyProduct:[...this.state.cart,product4]};},()=>{console.log(this.state)});
        }
        //Adding clothes items to cart
        addClothesToCart=id=>{
            let tempcartclothesproduct=[...this.state.clothesProducts];
            const index5 =  tempcartclothesproduct.indexOf(this.getClothesItem(id));
            const product5 = tempcartclothesproduct[index5];
            product5.inCart=true; // changing properties.
            product5.count=1
            const price5 = product5.price;
            product5.total=price5;    
            this.setState(()=>{return{clothesProducts:tempcartclothesproduct,cart:[...this.state.cart,product5],buyProduct:[...this.state.cart,product5]};},()=>{console.log(this.state)});
        }

    // FRONT PAGE
    setProducts=()=>{ // This is to solve the problem which was seen in tester.
        let tempProducts=[];                
        storeProducts.forEach(item=>{
            const singleItem = {...item};   // copying each value from storeProducts taking it to 'item' and put it to the singleItem.
            tempProducts=[...tempProducts,singleItem];  /* tempProducts=[...tempProducts(1),singleItem(2)];,(1)--> grab empty value from the tempProducts array,(2)--> add the values to the empty array from the 'singleItem' */
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    } 
    // HOME ITEMS
    setHomeProducts=()=>{
        let temphomeProducts=[];        
        homeItems.forEach(items=>{
            const singleitems1 = {...items};
            temphomeProducts=[...temphomeProducts,singleitems1];
        })
        this.setState(()=>{
            return {homeProducts:temphomeProducts}
        })
    }
    // FASHION PRODUCTS
    setFashionProducts=()=>{
        let tempfashionProducts=[];
        fashionItems.forEach(item=>{
            const singleItem ={...item};
            tempfashionProducts=[...tempfashionProducts,singleItem];
        })
        this.setState(()=>{
            return {fashionProducts:tempfashionProducts}
        })
    }
    // ELECTRONIC PRODUCTS
    setElectronicProducts=()=>{
        let tempelectronicProducts=[];
        electronicItems.forEach(item=>{
            const singleItem={...item};
            tempelectronicProducts=[...tempelectronicProducts,singleItem];
        })
        this.setState(()=>{
            return {electronicProducts:tempelectronicProducts}
        })
    }
    // STATIONARY PRODUCTS
    setStationaryProducts=()=>{
        let tempstationaryProducts=[];
        stationaryItems.forEach(item=>{
            const singleItem={...item};
            tempstationaryProducts=[...tempstationaryProducts,singleItem];
        })
        this.setState(()=>{
            return {stationaryProducts:tempstationaryProducts}
        })
    }
    // Clothes 
    setClothesProducts=()=>{
        let tempclotheProducts=[];
        clotheItems.forEach(item=>{
            const singleItem={...item};
            tempclotheProducts=[...tempclotheProducts,singleItem];
        })
        this.setState(()=>{
            return {clothesProducts:tempclotheProducts}
        })
    }
    // Fetching Required Product Details
    getItem = id =>{
        const product = this.state.products.find(item=> item.id === id);  //const homeproduct= this.state.homeProducts.find(item=> item.id === id);       
        return (product);
    }
    getHomeItem = id =>{
        const homeproduct= this.state.homeProducts.find(item=> item.id === id);
        return(homeproduct);
    }
    getFashionItem = id =>{
        const fashionproduct= this.state.fashionProducts.find(item=> item.id === id);
        return(fashionproduct);
    }
    getElectronicItem = id =>{
        const electronicproduct= this.state.electronicProducts.find(item=> item.id === id);
        return(electronicproduct);
    }
    getStationaryItem=id=>{
        const stationaryproduct= this.state.stationaryProducts.find(item=> item.id===id);
        return(stationaryproduct);
    }
    getClothesItem=id=>{
        const clothesproduct= this.state.clothesProducts.find(item=> item.id===id);
        return(clothesproduct);
    }

    // Passing back the control to state arrays.
    handleDetail = (id) =>{
        let product = this.getItem(id);        
        this.setState(()=>{return{detailProduct:product}}) // overridding        
    }
    handleHomeDetail=id=>{
        let homeprod = this.getHomeItem(id);
        this.setState(()=>{return{detailProduct1:homeprod}}) 
    }
    handleFashionDetail=id=>{
        let fashionprod = this.getFashionItem(id);
        this.setState(()=>{return{detailProduct2:fashionprod}}) 
    }
    handleElectronicDetail=id=>{
        let electronicprod = this.getElectronicItem(id);
        this.setState(()=>{return{detailProduct3:electronicprod}})
    }
    handleStationaryDetail=id=>{
        let stationaryprod=this.getStationaryItem(id);
        this.setState(()=>{return{detailProduct4:stationaryprod}})
    }
    handleClothesDetail=id=>{
        let clothesprod=this.getClothesItem(id);
        this.setState(()=>{return{detailProduct5:clothesprod}})
    }

   // This is to test if the value in products changes the value in the Data.js aslo changes.This problem can be solved by destructuring.
   /* 
        tester = () => {         
        console.log('State products :',this.state.products[0].inCart);
        console.log('Data products :',storeProducts[0].inCart);
        const tempProducts=[...this.state.products]; // getting the values out
        tempProducts[0].inCart=true;
        this.setState(()=>{
            return {products:tempProducts};
        },()=>{
            console.log('State products :',this.state.products[0].inCart);
            console.log('Data products :',storeProducts[0].inCart);
        }
        )}
    */
   // Functions For Cart page

   increment = id =>{
       console.log("this is increment");
       let tempCart=[...this.state.cart];
       const selectedProduct=tempCart.find(item=>item.id === id);
       const index = tempCart.indexOf(selectedProduct);
       const product = tempCart[index];
       product.count=product.count+1;
       product.total=product.count*product.price;
       this.setState(()=>{return{cart:[...tempCart]}},()=>{this.addTotals()})
   }
   decrement = id =>{
       console.log("this is decrement");
       let tempCart=[...this.state.cart];
       const selectedProduct=tempCart.find(item=>item.id === id);
       const index = tempCart.indexOf(selectedProduct);
       const product = tempCart[index];
       product.count=product.count-1;
       if(product.count===0){
           this.removeItem(id)
       }
       else{
        product.total=product.count*product.price;
        this.setState(
            ()=>{
                return{cart:[...tempCart]};
            },
            ()=>{
                this.addTotals();
            }
        )
       }   
   }   

   /*removeItem = id=>{
       console.log("item removed");
       let tempProducts = [...this.state.products];       
       let tempCart = [...this.state.cart];
       tempCart = tempCart.filter(item=> item.id !== id); //returns all the item except the item that matches the given id.(returns the all the item to the cart that doesnt match this id)
      // const index = tempProducts.indexOf(this.getItem(id)); // gets the index of the product in the tempProducts array.
       //let removedProduct = tempProducts[index]; //gets the product that is to be removed
       tempCart.inCart=false;
       tempCart.count=0;
       tempCart.total=0;
       this.setState(()=>{
           return{
               cart:[...tempCart],
               products:[...tempProducts] // to set the values back to default
           };
        },()=>{this.addTotals();} //re-setting the value, to peform calculation for removed product.
       )
    }*/    
     removeItem = id=>{
        console.log("item removed");
       
        let tempProducts = [...this.state.products];
        let tempProducts1= [...this.state.homeProducts];
        let tempProducts2= [...this.state.fashionProducts];
        let tempProducts3= [...this.state.electronicProducts];
        let tempProducts4= [...this.state.stationaryProducts];
        let tempProducts5= [...this.state.clothesProducts];
       
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=> item.id !== id); //returns all the item except the item that matches the given id.(returns the all the item to the cart that doesnt match this id)
        
        const index = tempProducts.indexOf(this.getItem(id)); // gets the index of the product in the tempProducts array.
        const index1 = tempProducts1.indexOf(this.getHomeItem(id)); // gets the index of the product in the tempProducts array.
        const index2 = tempProducts2.indexOf(this.getFashionItem(id)); // gets the index of the product in the tempProducts array.
        const index3 = tempProducts3.indexOf(this.getElectronicItem(id)); // gets the index of the product in the tempProducts array.
        const index4 = tempProducts4.indexOf(this.getStationaryItem(id)); // gets the index of the product in the tempProducts array.
        const index5 = tempProducts5.indexOf(this.getClothesItem(id)); // gets the index of the product in the tempProducts array.
       
        if(index===0 || index===1 || index===2 || index===3 || index===4 || index===5 || index===6 || index===7)       
        {let removedProduct = tempProducts[index]; // gets the product that is to be removed        
        removedProduct.inCart=false;
        removedProduct.count=0;
        removedProduct.total=0;}   
        if(index1===0 || index1===1 || index1===2 || index1===3 || index1===4 || index1===5 || index1===6 || index1===7)
        {let removedProduct1 = tempProducts1[index1]; //gets the product that is to be removed
        console.log(index1)
        removedProduct1.inCart=false;
        removedProduct1.count=0;
        removedProduct1.total=0;}  
        if(index2===0 || index2===1 || index2===2 || index2===3 || index2===4 || index2===5 || index2===6 || index2===7)
        {let removedProduct2 = tempProducts2[index2]; //gets the product that is to be removed
        removedProduct2.inCart=false;
        removedProduct2.count=0;
        removedProduct2.total=0;}   
        if(index3===0 || index3===1 || index3===2 || index3===3 || index3===4 || index3===5 || index3===6 || index3===7)
        {let removedProduct3 = tempProducts3[index3]; //gets the product that is to be removed
        removedProduct3.inCart=false;
        removedProduct3.count=0;
        removedProduct3.total=0;}
        if(index4===0 || index4===1 || index4===2 || index4===3 || index4===4 || index4===5 || index4===6 || index1===7)
        {let removedProduct4 = tempProducts4[index4]; //gets the product that is to be removed
        removedProduct4.inCart=false;
        removedProduct4.count=0;
        removedProduct4.total=0;}
        if(index5===0 || index5===1 || index5===2 || index5===3 || index5===4 || index5===5 || index5===6 || index5===7)
        {let removedProduct5 = tempProducts5[index5]; //gets the product that is to be removed
        removedProduct5.inCart=false;
        removedProduct5.count=0;
        removedProduct5.total=0;}
        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts], // to set the values back to default
                products1:[...tempProducts1], // to set the values back to default
                products2:[...tempProducts2], // to set the values back to default
                products3:[...tempProducts3], // to set the values back to default
                products4:[...tempProducts4], // to set the values back to default
                products5:[...tempProducts5] // to set the values back to default
            };
         },()=>{this.addTotals();} //re-setting the value, to peform calculation for removed product.
        )
     }
    
     

   clearCart=()=>{
       console.log("Cart is clear");
       this.setState(()=>{return{cart:[]}},
       ()=>{
           this.setProducts(); // everything set backs to default i.e in data
           this.addTotals();// totals set to default
        }
    )
   }
   addTotals=()=>{
       let subTotal = 0;
       this.state.cart.map(item=>{subTotal+=item.total});
       const tempTax = subTotal * 0.1;
       const tax = parseFloat(tempTax.toFixed(2));
       const total = subTotal + tax;
       this.setState(()=>{return{cartSubTotal:subTotal,cartTax:tax,cartTotal:total}});
    }
    placeOrder=()=>{
        this.setState({confirmOrder:true})
    }
    closeTab=()=>{
        this.setState({confirmOrder:false});
    }

    logtoolbarOpener=()=>{
        this.setState({logToolbar:true});
      }

    render() {
        return (
           // Provider is returned 
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                addHomeToCart:this.addHomeToCart,
                addFashionToCart:this.addFashionToCart,
                addElectronicToCart:this.addElectronicToCart,
                addStationaryToCart:this.addStationaryToCart,
                addClothesToCart:this.addClothesToCart,    
                handleHomeDetail:this.handleHomeDetail,
                handleFashionDetail:this.handleFashionDetail,
                handleElectronicDetail:this.handleElectronicDetail,
                handleStationaryDetail:this.handleStationaryDetail,
                handleClothesDetail:this.handleClothesDetail,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem, 
                placeOrder:this.placeOrder,   
                closeTab:this.closeTab,
                clearCart:this.clearCart,
                logtoolbarOpener:this.logtoolbarOpener
            }}>
                {this.props.children}    {/* returning all the children (within this component) in our application */}
            </ProductContext.Provider>
        )
    }
}

export {ProductProvider,ProductConsumer};

/* 
   Difference of syntax between assigning and copying.   
   products=storeProducts; -->This is assigning
   products=[...storeProducts] --> This is copying
*/
