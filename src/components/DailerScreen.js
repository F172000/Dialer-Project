import React from 'react'
import {TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BackspaceIcon from '@mui/icons-material/Backspace';
export default function DailerScreen() {
    
const roundButtonStyle = {
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    backgroundColor:'#322D31',
  };
  const roundButtoncallStyle = {
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    backgroundColor:'green',
  };
  return (
    <div className='Dailer'>
     <TextField  className= 'centered-input' variant="standard" />
     <Link to={''} className='anchorstyle'>Add Number</Link>
     <div className='grid-container'>
     <Button style={roundButtonStyle} variant='contained' >1</Button >
  <Button style={roundButtonStyle} variant='contained'>2 ABC</Button>
  <Button style={roundButtonStyle} variant='contained'>3 DEF</Button >  
  <Button style={roundButtonStyle} variant='contained'>4 GHI</Button >
  <Button style={roundButtonStyle} variant='contained'>5 JKL</Button >
  <Button style={roundButtonStyle} variant='contained'>6 MNO</Button >  
  <Button style={roundButtonStyle} variant='contained'>7 PQRS</Button >
  <Button style={roundButtonStyle} variant='contained'>8 TUV</Button >
  <Button style={roundButtonStyle} variant='contained'>9 XYZ</Button >
  <div></div >
  <Button style={roundButtonStyle} variant='contained'>0</Button >
 <div className='cross'><BackspaceIcon style={{color:"white"}}/></div>
     </div>
     <div >
     <Button style={roundButtoncallStyle} variant='contained'><LocalPhoneIcon/></Button >
     </div>
    </div>
  )
}

