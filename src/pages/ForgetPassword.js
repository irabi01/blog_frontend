import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ForgetPassword extends Component {
  render() {
    return (
      <div className="forgetpassword">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                <div className="forgetpassword_part">
                    <h1>Cheers</h1>
                    <p>Enter your e-mail and we'll send you a link to get back into your account </p>
                    <form> 
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Enter e-mail"/>
                        </div>
                        <div className="form-group">
                            <button>Send reset password link</button>
                        </div>
                    </form>
                </div>
                <div className="go_to_login">
                    <p><Link to="/account/auth/login" className="link">Back to Login</Link> </p>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ForgetPassword
