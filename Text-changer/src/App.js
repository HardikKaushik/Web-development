import logo from './logo.svg';
import './App.css';
import Navabar from './components/Navabar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })

  }
 
  return (
    <>
 <Navabar title= "Text Changer" text1="About us" text2="" />
 
 <div className="container my-3">
  <Textform heading="Enter the text to Change" />
  {/*<Aboutus/>*/}
 </div>
    </>
  );
}

export default App;
