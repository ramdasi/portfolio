import React, { Component } from 'react'

export class skill extends Component {
    render() {
        return (
            <div className=" shadow p-3 col m-3 border-blue-4 font-weight-bold text-center">
                {this.props.skill}
            </div>
        )
    }
}

export default skill
