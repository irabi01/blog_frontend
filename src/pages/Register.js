import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
      <div className="register_container">
        <div className="row">
            <div className="col-md-8">
                <div className="images_part">
                    <h1>Irabi kassim</h1>
                </div>
            </div>
            <div className="col-md-4">
                <div className="register_part">
                    <h1>Cheers</h1>
                    <form> 
                        <div className="form-group">
                            <input type="text" name="fullname" id="fullname" placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="username" id="username" placeholder="Phone number, username, or email"/>
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <button>Sign up</button>
                        </div>
                    </form>
                </div>
                <div className="go_to_login">
                    <p>Have an account? <Link to="" className="link">Log in</Link> </p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Register
