import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem,Divider,ListItemText,Typography,List } from '@mui/material';
export default function CalllogScreen() {
    const dispatch = useDispatch();
    const logs = useSelector((state) => state.dialer);
    console.log(logs);
    const handledelete=(id)=>{
        dispatch({type:"delete",payload:id})
    }
    const [alignment, setAlignment] = React.useState('missed');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    const style = {
        p: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        borderColor: 'divider',
      };
  return (
    <div className='Dailer'>
       <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton style={{
          backgroundColor: 'gray', 
          color: 'white',           
        }} value="all">All</ToggleButton>
      <ToggleButton style={{
          backgroundColor: 'gray', 
          color: 'white',           
        }} value="missed">Missed</ToggleButton>
    </ToggleButtonGroup>
    <h2 className='recents' style={{color:'white'}}>Recents</h2>
    <List sx={style}>
        {logs.length>0? (
    logs.map((item,index)=>(

         <React.Fragment key={index}>
    <ListItem  >
    <ListItemText
         primary={<Typography variant="body2" style={{ color: 'red' }}>Test {item.id}</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
                Phone Call Audio
              </Typography>
            </React.Fragment>
            
          }
        />
            
            <span className='time'style={{color:'white'}}>{item.time}</span><DeleteIcon className='deleteicon' style={{color:'red'}} onClick={()=>handledelete(item.id)} />
      
    </ListItem>
    <Divider sx={{
    "&::before, &::after": {
      borderColor: "secondary.light",
    },
  }} />
  </React.Fragment>
   )) ):<div className='calllog' >No Call logs exist</div>}
    </List>
    </div>
  )
}
