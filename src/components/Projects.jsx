import React, { Component } from 'react'
import Card  from './layouts/card'

export class Projects extends Component {
    render() {
        return (
            <>
            <div className="h2 col-12 text-center">
                Projects
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Card title="my react website"/>
                <Card title="my face recognition"/>
                <Card title="I built motion detector"/>
                <Card title="I built Game"/>
                <Card title="I built Minimalistic Logo"/>
                <Card title="my react website"/>
                <Card title="my face recognition"/>
                <Card title="I built motion detector"/>
                <Card title="I built Game"/>
                <Card title="I built Minimalistic Logo"/>
            </div>
            </>
        )
    }
}

export default Projects
