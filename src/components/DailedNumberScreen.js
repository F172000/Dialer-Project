import React, { useEffect } from 'react'
import {IconButton} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import MicOffIcon from '@mui/icons-material/MicOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CallEndIcon from '@mui/icons-material/CallEnd';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function DailedNumberScreen() {
    const navigate=useNavigate();
    useEffect(()=>{
    setTimeout(()=>{
navigate('/Log')
    },10000);
    },[]);
    const roundButtonStyle = {
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        backgroundColor:'#787276',
      };
      const roundButtoncallStyle = {
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        backgroundColor:'red',
      };
  return (
    <div className='Dailer'>
     <ErrorOutlineIcon className='ibutton'/>
     <p className='calling'>Calling mobile...</p>
     <h3 className='Test99'>Test 99</h3>
     <div className='grid-container-2'>
     <div className='btn'><IconButton style={roundButtonStyle} variant='contained'><VolumeUpIcon style={{color:"white"}}/></IconButton >Speaker</div>
     <div className='btn'><IconButton style={roundButtonStyle} variant='contained'><VideocamIcon/></IconButton>FaceTime</div>
     <div className='btn'><IconButton style={roundButtonStyle} variant='contained'><MicOffIcon style={{color:"white"}}/></IconButton>Mute</div> 
     <div className='btn'><IconButton style={roundButtonStyle} variant='contained'><PersonAddIcon/></IconButton>Add</div>
     <div className='btn'><IconButton style={roundButtoncallStyle} variant='contained'><CallEndIcon style={{color:"white"}}/></IconButton>End</div>
     <div className='btn'><IconButton style={roundButtonStyle} variant='contained'><AppsIcon style={{color:"white"}}/></IconButton>Keyboard</div> 
     </div>
    </div>
  )
}
