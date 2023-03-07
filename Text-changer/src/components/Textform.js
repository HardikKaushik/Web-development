import React, { useState } from 'react'

export default function Textform(props) {
    const[text,settext]=useState('Enter your text here');

    const handleonchange=(event)=>{
        settext(event.target.value);

      }
    
    const handleonclrchange=()=>{
        let newtext='';
        settext(newtext)

      }

    
    const uppercase=()=>{
            let newtext= text.toUpperCase();
            settext(newtext)
            
            props.showalert("convertted","success");
          }
    const lowercase=()=>{
            let newtext= text.toLowerCase();
            settext(newtext)
          }

    const copier=()=>{
       let text=document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
    }

    const spaces=()=>{
      let newtext=text.split(/[ ]+/);
      settext(newtext.join(" "))
    }
    


   
    
  return (
      <>
  


    <div className="container">
   <h2>{props.heading}</h2>
<div className="mb-3 container2">
  <textarea className="form-control container2"  value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
  </div>

  <buttton className="btn btn-primary mx-1 my-1"  onClick={uppercase}>Convert to Uppercase</buttton>
  <buttton className="btn btn-primary mx-1 my-1" onClick={lowercase}>Convert to lowerrcase</buttton>
  <buttton className="btn btn-primary mx-1  my-1" onClick={spaces}>Remove Extra space</buttton>
  <buttton className="btn btn-primary mx-1 my-1" onClick={copier}>Copy text</buttton>
  <buttton className="btn btn-primary mx-1 my-1" onClick={handleonclrchange}>Clear text</buttton>
    </div>

 <div className="container my-3">
     <p>{text.split(" ").length} words and {text.length} Characters</p>
     <h2>preview</h2>
     <p>{text}</p>
    </div>
      </>
  )
}
