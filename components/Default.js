import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"200px"}}>
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5" style={{fontFamily:"Trebuchet MS"}}>
                        <h1 className="display-3">Page Not Found</h1>
                        <h3>The requested URL {''}
                        <span className="text-danger">
                            {this.props.location.pathname}
                        </span>{" "}
                        was not found
                        </h3>
                    </div>
                </div>        
            </div>
        )
    }
}
