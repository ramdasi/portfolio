import React, { Component } from 'react'
import Socialhandles from './layouts/socialhandles'
import contactsvg from './src/undraw_contact_us.svg'
export class Contactme extends Component {
    render() {
        return (
            <>
            <div className="d-flex flex-wrap justify-content-center text-md-left text-center">
                <div className="col-md-5 p-3 col-10 font-weight-bolder">
                    <h2>Get in Touch</h2><br/>
                    <Socialhandles/>
                </div>
                <div className="  order-md-2 order-1  my-md-5 col-md-6 px-4 col-12">
                    <img src={contactsvg} alt="img" className=" img-fluid" style={{zIndex:-1,}}/>
                </div>
            </div>
            </>
        )
    }
}

export default Contactme

/* Old form code
<div className="h4 d-flex m-3 text-center justify-content-center">
                Get in touch with me
            </div>
            <div className="container-fluid">
            <div className=" d-flex flex-wrap  justify-content-center text-center">
                <div className="row col-md-5 col-10 order-md-1 order-2  m-1 p-3  border rounded z1 bg-white shadow ">
                    <div class="mb-2 fadeinl">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-2 fadeinl">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>
                    <div class="col-auto text-right fadeinr">
                        <button type="submit" class="btn btn-outline-primary">Send</button>
                    </div>
                </div>
                <div className=" container order-md-2 order-1  my-md-5 col-md-6 px-4 col-8">
                    <img src={contactsvg} alt="img" className=" img-fluid" style={{zIndex:-1,}}/>
                </div>
            </div>
            
                </div>
                */