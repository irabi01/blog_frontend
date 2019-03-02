import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className="home_container">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="other_issues">
                  <h1>Display Something here</h1>
                </div>
              </div>
              <div className="col-md-5">
                <div className="other_issues">
                  <h1>Blog Content here</h1>
                </div>
              </div>
              <div className="col-md-3">
                <div className="other_issues">
                  <h1>Display Advertisement</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Home
