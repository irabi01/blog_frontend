import React, { Component } from 'react'

export class ForgetPassword extends Component {
  render() {
    return (
      <div className="forgetpassword">
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                <div className="login_part">
                    <h1>Cheers</h1>
                    <form> 
                        <div className="form-group">
                            <input type="email" name="email" id="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <button>send reset password link</button>
                        </div>
                    </form>
                </div>
                <div className="go_to_login">
                    <p>Have an account? <Link to="/auth/login" className="link">Log in</Link> </p>
                </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ForgetPassword
