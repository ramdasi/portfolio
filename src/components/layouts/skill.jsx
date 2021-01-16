import React, { Component } from 'react'

export class skill extends Component {
    render() {
        return (
            <>
            <div className=" p-3 pt-0 col-md-2 col-sm-5 col-9 m-md-2 m-1 border-blue-4  border-left fadeinl">
            <i class={"fa-3x p-2 "+this.props.icon}></i><br/>
               <b> {this.props.skill}</b>
            <br/>
                {this.props.description}
            </div>
            </>
        )
    }
}

export default skill
