import React, { Component } from 'react'

export class DisplayBloglist extends Component {
  render() {
    return (
      <div className="display_blog_container">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <img src={ this.props.articleList.image } className="img-fluid" alt="blog_image"/>
                    <h1>{this.props.articleList.title}</h1>
                    <hr/>
                    <p>{this.props.articleList.date}</p>
                    <hr/>
                    <p>{this.props.articleList.body}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default DisplayBloglist
