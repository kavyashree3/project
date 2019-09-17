import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import axios from 'axios';
import Product from '../Product';
class Image extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
}

klikGet(){
  var url = 'http://localhost:4001/images';
  axios.get(url)
  .then((res) => {
    this.setState({
      data:res.data,
    })  
    console.log(res)
  })
 
};


render() {


     return (
      <div className="row">    
                                             
                    {this.state.data.map(item=>{return <Product key={item.id} item={item}/>})} 
                    
                    </div>
  );
     }
 }
 
export default Image;
