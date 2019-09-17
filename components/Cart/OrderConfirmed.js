import React, { Component } from 'react'

export default class OrderConfirmed extends Component {
    render() {
        return (
            <div style={{marginTop:"300px"}}>
              <div className="container mt-5">
                 <div className="row">
                    <div className="col-10 mx-auto text-center text-title">
                     <h3 style={{color:'green'}}>Your Order Is Successfully Placed</h3>
                    </div>
                 </div>        
              </div>
            </div>
        )
    }
}
