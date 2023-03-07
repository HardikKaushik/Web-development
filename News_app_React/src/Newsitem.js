//import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, description, imgurl, newsurl,author,date} = this.props;
    return (
      <>
        <div className="container my-3">
          <div className="card" >
            <img src={imgurl ? imgurl : "https://www.gannett-cdn.com/presto/2022/03/08/USAT/dfe91ad9-46f4-431c-96c5-185a05b917e2-AP_Russia_Ukraine_War_Day_In_Photos.jpg?auto=webp&crop=6000,3375,x0,y559&format=pjpg&width=1200"} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p class="card-text"><small class="text-warning">By {author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
          </div>

        
      </div>

      </>
    )
  }
}

export default Newsitem
