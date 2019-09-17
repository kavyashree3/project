import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';;

export default function OrderPlaced({item,value}) {      
    const {id,title,img,price,total,count}=item;
    const {confirmOrder,closeTab,placeOrder,cartTotal}=value;    
            if(confirmOrder){
                     return(
                        <BuyContainer>                        
                           <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <p>{""}</p>
                                        <h3 style={{fontFamily:'Trebuchet MS'}}>Confirm Order</h3>  
                                        <hr/>
                                        <pre>Payment Method:</pre>                                        
                                        <p style={{fontFamily:'Trebuchet MS',fontWeight:'bold'}}>Cash On Delivery</p>               
                                        <hr/>  
                                        <h2 style={{fontFamily:'Trebuchet MS'}}>Total Price: $ {cartTotal}</h2>
                                        <br/>
                                        <Link to="/orderconfirmed">                    
                                        <button className="btn btn-outline-primary" onClick={()=>closeTab()} >Place Order</button> 
                                        </Link>                    
                                        <br/> <br/>  
                                        <button className="btn btn-outline-danger" onClick={()=>closeTab()}>Cancel</button>  
                                        <p>{""}</p>
                                        <div>

                                        </div>                
                                    </div>
                                </div>
                            </div>
                        </BuyContainer>
                    )}
                    else{
                        return null;
                    }
}

    

const BuyContainer = styled.div`
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    #modal{
        background:white;
    }
`;
