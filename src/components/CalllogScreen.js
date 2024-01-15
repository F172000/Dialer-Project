import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItem,Divider,ListItemText,Typography,List } from '@mui/material';
export default function CalllogScreen() {
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
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="missed">Missed</ToggleButton>
    </ToggleButtonGroup>
    <h2 className='recents' style={{color:'white'}}>Recents</h2>
    <List sx={style}>
    <ListItem>
    <ListItemText
         primary={<Typography variant="body2" style={{ color: 'red' }}>Test 99</Typography>}
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
            
          {/* <IconButton edge="end" aria-label="delete"> */}
            <span className='time'style={{color:'white'}}>5:55PM</span><DeleteIcon className='deleteicon' style={{color:'red'}} />
          {/* </IconButton> */}
      
    </ListItem>
    <Divider sx={{
    "&::before, &::after": {
      borderColor: "secondary.light",
    },
  }} />
    <ListItem>
    <ListItemText
    primary={<Typography variant="body2" style={{ color: 'red' }}>Test 99</Typography>}
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
            
          {/* <IconButton edge="end" aria-label="delete"> */}
            <span className='time' style={{color:'white'}}>5:55PM</span><DeleteIcon className='deleteicon' style={{color:"red"}} />
          {/* </IconButton> */}
      
    </ListItem>
    </List>
    </div>
  )
}
