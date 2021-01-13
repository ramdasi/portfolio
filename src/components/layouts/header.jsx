import React from 'react'
import { NavLink} from 'react-router-dom';
export default function header() {
    return (
        

          

            <nav class="navbar navbar-expand-md navbar-light ">
              <a class="navbar-brand mx-5 bold" href="/">Ishwar Ramdasi</a>v1.2
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse my-md-0 justify-content-end" id="navbarNavAltMarkup"> 
                <div class="navbar-nav mx-4">
                  <NavLink activeClassName="currentlink text-decoration-underline" className=" p-2 nav-link" exact to="/"         style={{}}>Home </NavLink>
                  <NavLink activeClassName="currentlink text-decoration-underline" className=" p-2 nav-link" exact to="/projects" style={{}}>Projects</NavLink>
                  <NavLink activeClassName="currentlink text-decoration-underline" className=" p-2 nav-link" exact to="/contactme" style={{}}>Contact Me</NavLink>
                </div>
                
              </div>
              
            </nav>



        


        
    )
}
