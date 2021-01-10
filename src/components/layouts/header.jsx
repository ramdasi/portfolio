import React from 'react'

export default function header() {
    return (
        <>

          

            <nav class="navbar navbar-expand-md navbar-light ">
              <a class="navbar-brand mx-5" href="/">Ishwar Ramdasi</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse my-md-0 justify-content-end" id="navbarNavAltMarkup"> 
                <div class="navbar-nav mx-4">
                  <a class="nav-link active " href="/">Home <span class="sr-only">(current)</span></a>
                  <a class="nav-link" href="/">Projects</a>
                  <a class="nav-link" href="/">Contact Me</a>
                </div>
                
              </div>
              
            </nav>



        


        </>
    )
}
