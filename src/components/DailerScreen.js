import React, { useState } from 'react'
import {TextField,Button} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useDispatch, useSelector } from 'react-redux';
export default function DailerScreen() {
    const dispatch = useDispatch();
    const dialedNumber = useSelector((state) => state.dialer.dialedNumber);
    console.log(dialedNumber);
    const navigate=useNavigate();
    const [dial,setdial]=useState('');
const roundButtonStyle = {
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    backgroundColor:'#322D31',
    fontSize:"13px",
  };
  const roundButtoncallStyle = {
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    backgroundColor:'green',
  };
  const handleButtonClick = (digit) => {
    dispatch({type:'Add_Number',payload:dialedNumber + digit});
  };
  const handleBackspaceClick = () => {
    dispatch({ type: 'Remove_Number', payload: dialedNumber.slice(0, -1) });
    // setdial(dial.slice(0, -1));
  };
  const handleNavigate=()=>{
    if(dialedNumber===''){
        navigate('/')
    }
    else{
        dispatch({type:'SET_DIALED_NUMBER',payload:dialedNumber});
        navigate('/Dail')
    }
  }
  return (
    <div className='Dailer'>
     <TextField   variant="standard" value={dialedNumber} InputProps={{ style: { borderBottom: '1px solid white', color: 'white' } }}/>
     <Link to={''} className='anchorstyle'>Add Number</Link>
     <div className='grid-container'>
     <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(1)} >1</Button >
  <Button style={roundButtonStyle} variant='contained' onClick={()=>handleButtonClick(2)}>2 ABC</Button>
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(3)}>3 DEF</Button >  
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(4)}>4 GHI</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(5)}>5 JKL</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(6)}>6 MNO</Button >  
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(7)}>7 PQRS</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(8)}>8 TUV</Button >
  <Button style={roundButtonStyle} variant='contained'onClick={()=>handleButtonClick(9)}>9 XYZ</Button >
  <div></div >
  <Button style={roundButtonStyle} variant='contained' onClick={()=>handleButtonClick(0)}>0</Button >
 <div className='cross'><BackspaceIcon onClick={handleBackspaceClick} style={{color:"white"}}/></div>
     </div>
     <div >
     <Button style={roundButtoncallStyle} variant='contained' onClick={handleNavigate}><LocalPhoneIcon/></Button >
     </div>
    </div>
  )
}

