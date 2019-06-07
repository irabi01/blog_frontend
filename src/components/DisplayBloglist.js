import React, { Component } from 'react'
// import TextTruncate from 'react-text-truncate'
// import LinesEllipsis from 'react-lines-ellipsis'
// import { Link } from 'react'
import ReadMoreReact from 'read-more-react'
import Moment from 'react-moment';
import 'moment-timezone';

export class DisplayBloglist extends Component {
  render() {
    return (
      <div className="display_blog_container">
            <div className="row">
                <div className="col-md-12">
                    <img src={ this.props.articleList.image } className="img-fluid" alt="blog_image"/>
                    <h1>{this.props.articleList.title}</h1>
                    <hr/>
                    <p><Moment fromNow interval={30000}>{this.props.articleList.date}</Moment></p>
                    <hr/>
                    {/* <p>{this.props.articleList.body}</p> */}
                    {/* <p>
                      <TextTruncate
                        line = {1}
                        truncateText = " ... "
                        text = {this.props.articleList.body}
                        // textTruncateChild = {<Link to="#">Read more</Link>}
                      />
                    </p>  */}
                    {/* <p>
                    <LinesEllipsis
                      text={this.props.articleList.body}
                      maxLine='3'
                      ellipsis='...'
                      trimRight
                      basedOn='letters'
                    />
                    </p> */}
                    <p>
                      <ReadMoreReact
                        text  = { this.props.articleList.body }
                        min   = { 80 }
                        ideal = { 100 }
                        max   = { 200 }
                        // readMoreText ={<Link to="#">(More-Details)</Link>}
                      />
                    </p>
                </div>
            </div>
      </div>
    )
  }
}

export default DisplayBloglist
