import React from 'react'
import { useState } from 'react';

export default function Navbar(props) {
  const [style,mystyle]=useState(
    {
      color: 'black',
      backgroundColor:'white',
      
     
     }
     )

     const inttoggler=()=>{
      if(style.color=='black'){
        mystyle({
          color:'white',
          backgroundColor:'black',
         
         
        })
       
      }
      else{
        mystyle({
         color:'black',
         backgroundColor:'white'
        })
        
      }

   }
  
  return (
    <div className="container1">
    <nav className="navbar navbar-expand-lg navbar-light"  >
  <div className="container-fluid container1" style={style}>
    <a className="navbar-brand container1" href="#" style={style}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"style={style}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"style={style}>{props.text1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"style={style}>{props.text2}</a>
        </li>
        
      </ul>
    </div>
  {/*<label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark MOde</label>
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" onClick={inttoggler}  id="flexSwitchCheckDefault"/>
    </div>
  */}
        
  </div>
  </nav> 
  </div>
  )
}
