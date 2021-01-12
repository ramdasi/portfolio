import React, { Component } from 'react'

export class skill extends Component {
    render() {
        return (
            <div className=" shadow p-3 col-4 m-1 border-blue-4 font-weight-bold text-center">
                {this.props.skill}
            </div>
        )
    }
}

export default skill
