import * as React from 'react';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Button from '@mui/material/Button';


import Stack from '@mui/material/Stack';



import './feed.css';

const Feed=(props)=> {
  const [note, setNote] = React.useState({
      title:"",
      content:""
  });

 

  const handleChange = (event) => {
     
      const {name,value}=event.target; 

      setNote((prevData)=>{
          return{
              ...prevData,
              [name]:value,
            }
        });
        console.log(note)
    };

    const addEvent = ()=>{
        props.passnote(note);
        setNote({
            title:"",
            content:""
        });
        

    }
  

  return (
  <>
    <div>
        <form action="" className='mainfeed'>
            <input 
            type="text" 
            name="title"
            placeholder='Title' 
            autocomplete="off"
            value={note.title}
            onChange={handleChange} 
             />
             <br />
            <textarea 
            rows=""
            column=""
            name="content"
             placeholder='write a note'
             value={note.content}
             onChange={handleChange}/>
        </form>
            <button className='btnfeed' onClick={addEvent}>
                lksldf
            </button>
            <Stack direction="row" spacing={2}>
            <Button className='btnfeed' variant="outlined" onClick={addEvent} startIcon={<AddCircleOutlinedIcon />}>
        Add
      </Button>
      </Stack>
    </div>
  </>
  );
};


export default Feed;