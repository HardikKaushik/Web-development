import React, {useState} from 'react'

export default function Aboutus() {


   const [style,mystyle]=useState(
     {
       color: 'black',
       backgroundColor:'white'
      }
      )

    const[btn,setbtn]=useState("Enable Dark Mode")

    const inttoggler=()=>{
       if(style.color=='black'){
         mystyle({
           color:'white',
           backgroundColor:'black'
         })
         setbtn("Enable LIght mode")
       }
       else{
         mystyle({
          color:'black',
          backgroundColor:'white'
         })
         setbtn("Enable Dark mode");
       }

    }
   
  return (
      
      <div className="container" style={style}>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
     
      <div class="card-body" style={style}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
   
      <div class="card-body" style={style}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
     <div class="card-body" style={style}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    
      <div class="card-body" style={style}>
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="container">
  <button onClick={inttoggler} type="button" class="btn btn-primary mx-1">{btn}</button>
  </div>
</div>
      </div>
  )
}
