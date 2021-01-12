import React from 'react'
import {NavLink} from 'react-bootstrap';
export default function header() {
    return (
        <>

          

            <nav class="navbar navbar-expand-md navbar-light ">
              <a class="navbar-brand mx-5 bold" href="/">Ishwar Ramdasi</a>v1.1
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse my-md-0 justify-content-end" id="navbarNavAltMarkup"> 
                <div class="navbar-nav mx-4">
                  <NavLink class="nav-link active " href="/">Home <span class="sr-only">(current)</span></NavLink>
                  <NavLink class="nav-link" href="/projects">Projects</NavLink>
                  <NavLink class="nav-link" href="/contactme">Contact Me</NavLink>
                </div>
                
              </div>
              
            </nav>



        


        </>
    )
}
