import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="login_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="login_part">
                            <h1>Cheers</h1>
                            <form> 
                                <div className="form-group">
                                    <input name="username" id="username" placeholder="Phone number, username, or email"/>
                                </div>
                                <div className="form-group">
                                    <input name="password" id="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button>Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Login
