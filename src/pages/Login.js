import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="login_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="login_part">
                            <h1>Cheers</h1>
                            <form> 
                                <div className="form-group">
                                    <input type="text" name="username" id="username" placeholder="Phone number, username, or email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" id="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button>Log in</button>
                                </div>
                            </form>
                        </div>
                        <div className="go_to_sign_up">
                            <p>Don't have an account? Sign up</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Login
