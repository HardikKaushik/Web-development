
import './App.css';

import Feed from './components/Feed';


import Navbar from './components/Navbar';
import Note from './components/Note';
import { useState } from 'react';

function App() {
  
  const [additem,setadditem]= useState([]);

  const addNote=(note)=>{
    setadditem((prevData)=>{
     
     return  [...prevData,note];
        
    });
       console.log(note);
  };
  const ondelete=(id)=>{
    setadditem((olddata)=>
    olddata.filter((currdata,index)=>{
      return index !== id;
    })
    );

  };
  return (
  <>
     <Navbar></Navbar>
    
    <Feed passnote={addNote}/>
    
    

    {additem.map((val,index)=>{
      return ( <Note
          key={index}
          id={index}
          title={val.title}
          content={val.content}
          deleteitem={ondelete}
          />
      );
    })}
 
    </>
 
    
  );
}

export default App;
