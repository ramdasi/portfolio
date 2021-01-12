import React, { Component } from 'react'
import contactsvg from './src/undraw_contact_us.svg'
export class Contactme extends Component {
    render() {
        return (
            <>
            <div className="h4 d-flex m-3 text-center justify-content-center">Get in touch with me</div>
            <div className=" d-flex justify-content-center text-center">
            <div className="row col-md-5 col-8 mx-sm-5 mx-2 my-5 p-3 border rounded bg-light shadow-sm fadeinl">
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                </div>
                <div class="col-auto text-right">
                    <button type="submit" class="btn btn-primary mb-3">Send</button>
                </div>
            </div>
            
            </div>
            </>
        )
    }
}

export default Contactme
