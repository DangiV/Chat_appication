import './Com.css';
import Box from '@mui/material/Box';
import SignIn from '../Login/SignIn';
import React, { useState } from 'react';
import Signup from '../Register/Signup';
import { Paper, Tab, Tabs } from '@mui/material';
import Typography from '@mui/material/Typography';

const paperStyle = { width: '520px', margin: '2px auto' }

const Com = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };


  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  return (
    <>
    <div className='demoImg'>
      <Paper style={paperStyle} >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='primary'
          aria-label="disabled tabs example">
          <Tab label="Sign-In" />
          <Tab label="Sign-Up" />

          

        </Tabs>

        <TabPanel value={value} index={0} style={{ paddingTop: '0px' }}>
          <SignIn />
        </TabPanel>

        <TabPanel value={value} index={1} style={{ paddingTop: '0px' }}>
          <Signup />
        </TabPanel>


      </Paper>
      </div>
    </>
  )
}

export default Com
