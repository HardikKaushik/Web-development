import  React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import Stack from '@mui/material/Stack';

import './feed.css'
       
const Note =(props)=>{

     const deletenote =()=>{
         props.deleteitem(props.id);
     }
    return (
        <>
        <div className="container1">

        <div className='notes'>
            <h1>{props.title}</h1>
             <br />
            <p>{props.content} </p>
            <button className=''></button>
            <Stack direction="row" spacing={2}>
            <Button className='btn' variant="outlined"  onClick={deletenote}   startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </Stack>
        </div>
        </div>
        </>
    );
};

export default Note;