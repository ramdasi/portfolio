import React from 'react'
import dp from './src/dp.jpg'
import Skill from './layouts/skill'
export default function Aboutme() {
    return (
        <>
        <div className="container-md p-5 ">
            <div className="row justify-content-center">
                <div className=" col-lg-2 col-md-3 col-sm-4 col-5 ">
                <img  className=" rounded-circle img-fluid fadeinr" src={dp} alt="Img here"/>
            </div>
            <p className="col-md-4 col-sm-4 col-7  pl-3 border-left">
                <b><h4>Hi, I'm Ishwar Ramdasi.</h4></b> I am a full stack software and web developer. <br/>
                <b>-BE Comp at Sppu, 2023</b>
            </p>
        </div>

        
        </div>
        
        <div className="row d-flex w-100 justify-content-center  " >
        <div className=" font-weight-bolder h3 col-12 text-center my-5 mb-5 "><i class="fas px-3 fa-pencil-ruler"></i>Skills</div>
        <Skill skill="Python Developement"
                    description="Machine Learning,Browser Automation, Deep Learning, Django and many more"
                    icon="fab fa-python"
            />
            <Skill skill="C++ Programming"
                    description="C++ data structures, Object oriented c++, and Graphics libraries"
                    icon="fas fa-laptop-code"
            />
            <Skill skill="Web Developement" 
                    description="HTML, CSS, JS, ReactJS, Bootstrap, php. This site is also developed by me"
                    icon="fas fa-server"
            />
            
            <Skill skill="Graphic Designing" 
                    description="Photoshop editing, GIMP, Illustrations, SVG, Logo Designing"
                    icon="fas fa-palette"
            />
        </div>
        </>
    )
}
