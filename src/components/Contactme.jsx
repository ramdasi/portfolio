import React, { Component } from 'react'
import contactsvg from './src/undraw_contact_us.svg'
export class Contactme extends Component {
    render() {
        return (
            <>
            <div className="h4 d-flex m-3 text-center justify-content-center">
                Get in touch with me
            </div>
            <div className="container-fluid">
            <div className=" d-flex flex-wrap order-md-1 order-2  justify-content-center text-center">
                <div className="row col-md-5 col-10  m-1 p-3   rounded z1 bg-white shadow fadeinl">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="3"></textarea>
                    </div>
                    <div class="col-auto text-right">
                        <button type="submit" class="btn btn-outline-primary">Send</button>
                    </div>
                </div>
                <div className=" container  my-md-5 order-md-2 order-1 col-md-6 col-12">
                    <img src={contactsvg} alt="img" className=" img-fluid" style={{zIndex:-1,}}/>
                </div>
            </div>
            
                </div>
            </>
        )
    }
}

export default Contactme
