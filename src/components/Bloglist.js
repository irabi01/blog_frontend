import React, { Component } from 'react'
import DisplayBloglist from './DisplayBloglist'

export class Bloglist extends Component {
  render() {
    return this.props.displaylist.map((article) => (   
        <DisplayBloglist key = {article.id} articleList = {article}/>
));
  }
}

export default Bloglist
