import React from 'react'
import dp from './src/dp.jpg'
import Skill from './layouts/skill'
export default function Aboutme() {
    return (
        <>
        <div className="container-md p-5 ">
            <div className="row justify-content-center">
                <div className=" col-lg-2 col-md-3 col-sm-4 col-5 ">
                <img  className=" rounded-circle img-fluid" src={dp} alt="Img here"/>
            </div>
            <p className="col-md-4 col-sm-4 col-7  pl-3 border-left">
                <b><h4>Hi, I'm Ishwar Ramdasi.</h4></b> I am a full stack software and web developer. <br/>
                <b>-BE Comp at Sppu, 2023</b>
            </p>
        </div>

        
        </div>
        <div className=" font-weight-bolder h3 col text-center my-5">Skills</div>
        <div className="row d-flex justify-content-center">
            <Skill skill="Full stack Python Developer"/>
            <Skill skill="Fluent C++ Programmer"/>
            <Skill skill="React and Django Web Developer" />
            <Skill skill="HTML, CSS, Bootstrap, Js Developer" />
            <Skill skill="Logo Designer" />
        </div>
        </>
    )
}
