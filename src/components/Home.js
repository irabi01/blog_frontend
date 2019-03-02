import React, { Component } from 'react'
import Bloglist from './Bloglist';
import axios from "axios"

export class Home extends Component {


  // create a constructor
  constructor(props){
      super(props)
      this.state = {
          bloglist: [],
      }
  }


  componentDidMount(){
      axios.get('http://localhost:8000/lists/articles/').then(res =>{this.setState({bloglist:res.data})})
    }



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
                <div className="blog_contents">
                  <h1>Daily Data...</h1>
                  <div className="all_data">
                    <Bloglist displaylist={this.state.bloglist}/>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="advertisement">
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
