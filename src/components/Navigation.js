import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navigation">
            <Link className="navbar-brand" to="/">Cheers Logo Here</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="#">All Languages</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Python</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">ReactJs</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">AngularJs</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">NodeJs</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Laravel</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">SQL</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">MongoDB</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">PostgreSQL</Link>
                        </div>
                        
                    </li>
                    <li>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="mr-sm-2 search_form" type="search" placeholder="Search your keyword " aria-label="Search"/>
                      </form>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notification">Notification  <i className="fa fa-bell"></i></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Notification2
                        </Link>
                        <div className="nofication_menu dropdown-menu" aria-labelledby="navbarDropdown">
                          <div className="container">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="nofication_contents">


                                <Link to="/notification">
                                  <div className="media">
                                    <img src={require('../images/bg1.jpg')} className="mr-3 img-fluid" alt="nofication"/>
                                    <div className="media-body">
                                      <p className="mt-0">hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                                    </div>
                                  </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/notification">
                                  <div className="media">
                                    <img src={require('../images/bg1.jpg')} className="mr-3 img-fluid" alt="nofication"/>
                                    <div className="media-body">
                                      <p className="mt-0">hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                                    </div>
                                  </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/notification">
                                  <div className="media">
                                    <img src={require('../images/bg1.jpg')} className="mr-3 img-fluid" alt="nofication"/>
                                    <div className="media-body">
                                      <p className="mt-0">hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                                    </div>
                                  </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link to="/notification">
                                  <div className="media">
                                    <img src={require('../images/bg1.jpg')} className="mr-3 img-fluid" alt="nofication"/>
                                    <div className="media-body">
                                      <p className="mt-0">hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                                    </div>
                                  </div>
                                </Link>
                                <div className="dropdown-divider"></div>
                                



                                </div>
                              </div>
                            </div>
                          </div>
                        {/* <Link className="dropdown-item" to="#">All Languages</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">Python</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">ReactJs</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">AngularJs</Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">NodeJs</Link> */}
                        </div>
                        
                    </li>
                    </ul >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="/account/auth/login">Login  <i className="fa fa-login"></i></Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/account/auth/register">Register  <i className="fa fa-login"></i></Link>
                      </li>
                    </ul>
                    
                </div>
            </nav>
      </div>
    )
  }
}

export default Navigation
