import './Practice.css'
import * as React from 'react';
import moment from 'moment';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { Grid, Paper } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { addMessage, deleteMessage } from '../../Redux/chat';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const Chat = () => {

  const state = useSelector(state => state.chat.list)
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inputdata, setinputData] = useState("");


  const paperStyle = { padding: '30px 20px', width: '650px', margin: '0 auto' }
  const headerStyle = { margin: '8px' }
  const avatarStyle = { backgroundColor: '#1bbd7e' }


  const sendMessage = () => {
    if (!inputdata) {

    }
    else {
      dispatch(addMessage(inputdata))
    }
    setinputData("")
  }



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  return (


    <>
      <h1>Welcome to user chat component</h1>


      <Grid >
        <Paper elevation={20} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <ChatBubbleIcon />
            </Avatar>
            <h2 style={headerStyle}>Chat</h2>

            <div className='container'>
              <div className="msg-header">
                <div className='msg-header-img'>
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                </div>
                <div className='active'>
                  <h4>Ragnar</h4>
                  <h6>3 Hours ago....</h6>
                </div>
                <div className='header-icon'>
                  <i className='fa'><LocalPhoneIcon /></i>
                  <i className='fa'><VideoCallIcon /></i>
                  <i className='fa'><MoreVertIcon /></i>
                </div>
              </div>

              <div className="chat-page">
                <div className="msg-box">
                  <div className="chat">
                    <div className="msg-page">

                      {/* <div className="recive-chats">
                  <div className="recive-chat-img">
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                  </div>
                  <div className="recive-msg">
                    <div className="recive-msg-inbox">
                      <p>hi!! this message is from Ragnar</p>
                      <span className='time'>10:20 AM | March 15</span>
                    </div>
                  </div>
                </div> */}

                      {/* <div className="outgoing-chats">
                  <div className="outgoing-chat-msg">
                    <p>hi!! this message is from me</p>
                    <span className='timenew'>11:20 AM | March 15</span>
                  </div>
                  <div className="outgoing-chat-img">
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                  </div>
                </div> */}



                      <div>
                        {
                          state.map((val, ind) => {
                            return (
                              <div className="outgoing-chats">
                                <div className="outgoing-chat-msg" key={ind}>
                                  <p>{val}<span>

                                    <IconButton
                                      size="large"
                                      aria-label="account of current user"
                                      aria-controls="menu-appbar"
                                      aria-haspopup="true"
                                      onClick={handleMenu}
                                      color="inherit"
                                    >
                                      <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                      id="menu-appbar"
                                      anchorEl={anchorEl}
                                      anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                      keepMounted
                                      transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                      }}
                                      open={Boolean(anchorEl)}
                                      onClose={handleClose}
                                    >
                                      <MenuItem onClick={handleClose}>Edit</MenuItem>
                                      <MenuItem onClick={() => {dispatch(deleteMessage(ind)); handleClose();}}>Delete</MenuItem>

                                    </Menu> </span></p>
                                  <span className='timenew'>{moment().format('hh:mm a')}<CheckIcon /> </span>

                                </div>
                              </div>
                            )
                          })
                        }
                      </div>



                    </div>
                  </div>
                </div>

                <div className="msg-bottom">
                  <div className="bottom-icon">
                    {/* <i className='fa'><InsertEmoticonIcon /></i> */}
                    <i className='fa'><ClearAllIcon /></i>
                    <i className='fa'><CurrencyRupeeIcon /></i>
                    <i className='fa'><CameraAltIcon /></i>
                  </div>

                  <div className="input-group">
                    <input type="text" placeholder='message' className='form-control' value={inputdata} onChange={(e) => setinputData(e.target.value)} />
                    <div className="input-group-append">
                      {/* <button className='input-group-text'>Add</button> */}
                      <span className='input-group-text' onClick={sendMessage}><SendIcon style={{ marginRight: '10px' }} /></span>

                    </div>

                  </div>
                </div>

              </div>

            </div>



          </Grid>
        </Paper>
      </Grid>

    </>
  )
}

export default Chat
