import React, { Component } from 'react'

export class Notification extends Component {
  render() {
    return (
      <div>
        <div className="notification_container">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="notification_contents">
                  <h1>Daily notification</h1>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="notification_list">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="all_notification">
                <div className="image_part">
                  <img src={require('../images/bg1.jpg')} alt="nofication_image" className="img-fluid"/>
                </div>
                <div className="other_contents_part">
                  <h1>Lorem ipsum doller</h1>
                  <p>hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è un testo segnaposto utilizzato nel.</p>
                  <span>Date: 20-06-2019</span>
                </div>
              </div>

              <div className="all_notification">
                <div className="image_part">
                  <img src={require('../images/bg1.jpg')} alt="nofication_image" className="img-fluid"/>
                </div>
                <div className="other_contents_part">
                  <h1>Lorem ipsum doller</h1>
                  <p>hello there Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.Lorem Ipsum è un testo segnaposto utilizzato nel.</p>
                  <span>Date: 20-06-2019</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Notification
