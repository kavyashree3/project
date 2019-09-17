//Indivisual Products
import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductConsumer} from './Context';
import PropTypes from 'prop-types'; //To prevent data from being modified

export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card"> {/* bootstrap class */}
                <ProductConsumer>
                {value => ( // Since its ContextAPI concept, we are not using props to call the function in other .js file, we use value here.
                    <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>

                    <Link to="/details">
                        <img src={img} alt="product" className="card-img-top"></img>
                    </Link>
                    {/* <button  className="btn btn-outline-default" disabled="disabled">
                        <img  src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png" width="20px" height="20px" alt="Add to Cart"/>
                        Add to Cart
                    </button>*/}    
                      <button className="btn btn-outline-default" disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}}>
                      {inCart?(<img  src="https://cdn1.iconfinder.com/data/icons/shopping-e-commerce/24/Cash-Register-512.png" width="20px" height="20px" alt="Added to Cart"/>):(<img  src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png" width="20px" height="20px" alt="Add to Cart"/>)}
                      </button>
                </div>
                )}
                </ProductConsumer>
                </div>
                {/* Card footer */}
                <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0" style={{fontFamily:'Trebuchet MS'}}>{title}</p>
                <h5 className="align-self-center mb-0" style={{display:'flex',fontFamily:'Trebuchet MS',fontStyle:'italic'}}>$ {price}</h5>
                </div>
            </ProductWrapper>
        )
    }
}

//Dont touch.
Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
            .card{
                transition:all 0.1s linear;
            }
            .card-footer{
                background:transparent;
                border-top:transparent;
                transition:all 0.1s linear;
            }
            &:hover{
                .card{
                    border:0.1rem solid purple;
                    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
                }
                .card-footer{
                    background:rgba(247,247,247);
                }
            }
           .img-container{
               postion:relative;
               overflow:hidden;
           }
           &:hover .card-img-top{
               transform:scale(1.06);
           }
           .card-img-top{
               transition: all 0.1s linaer;
           }
           .btn{
               position:absolute;
               bottom:0;
               right:0;
               padding:0.4rem 0.6rem;
               border:none;
               background-color:mediumpurple;
               border-radius: 0.5 0 0 0;
           }
           &:hover{
               transform:scale(1.05);
           }

`;

// transition-- something happens after a specified time interval, 'all' means transition property should be applicalble to all properties. and is of the type 'linear'.
// overflow is used if the image is bigger and the extra contents are to be hidden
// transform is used for animation , scale is used here to increase the size of the image when hovered.
