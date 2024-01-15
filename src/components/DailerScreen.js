import React, { useState } from 'react'
import {TextField,Button} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BackspaceIcon from '@mui/icons-material/Backspace';
export default function DailerScreen() {
    const navigate=useNavigate();
    const [dial,setdial]=useState('');
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
  const handleBackspaceClick = () => {
    setdial(dial.slice(0, -1));
  };
  const handleNavigate=()=>{
    if(dial===''){
        navigate('/')
    }
    else{
        navigate('/Dail')
    }
  }
  return (
    <div className='Dailer'>
     <TextField  className= 'centered-input' variant="standard" value={dial} />
     <Link to={''} className='anchorstyle'>Add Number</Link>
     <div className='grid-container'>
     <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+1)} >1</Button >
  <Button style={roundButtonStyle} variant='contained' onClick={()=>setdial(dial+2)}>2 ABC</Button>
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+3)}>3 DEF</Button >  
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+4)}>4 GHI</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+5)}>5 JKL</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+6)}>6 MNO</Button >  
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+7)}>7 PQRS</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+8)}>8 TUV</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>setdial(dial+9)}>9 XYZ</Button >
  <div></div >
  <Button style={roundButtonStyle} variant='contained' onClick={()=>setdial(dial+0)}>0</Button >
 <div className='cross'><BackspaceIcon onClick={handleBackspaceClick} style={{color:"white"}}/></div>
     </div>
     <div >
     <Button style={roundButtoncallStyle} variant='contained' onClick={handleNavigate}><LocalPhoneIcon/></Button >
     </div>
    </div>
  )
}

