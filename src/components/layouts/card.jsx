import React, { Component } from 'react'
import logo from './../src/logo512.png'
export class card extends Component {
    render() {
        return (
            <div className="card col-lg-3 col-sm-5  col-10 m-2">
                <div className="card-header">Hello</div>
                <img className="card-img" src={logo} alt=".."/>
                <div className="card-body">this is card hearder</div>
                
            </div>
        )
    }
}

export default card
