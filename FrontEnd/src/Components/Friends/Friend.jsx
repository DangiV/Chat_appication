import Modal from "react-modal";
import Chat from "../Chat/Chat";
import io from "socket.io-client";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { postman } from "../../Config/helper";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Avatar, Grid, Paper } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const socket = io.connect("http://localhost:3030");
export default function Friend(props) {
  const paperStyle = { padding: "30px 20px", width: "490px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const [data, setData] = useState([]);
  const [searchbar, setsearchbar] = useState(false);
  const [show, setsshow] = useState(false);
  const [chat, setchat] = useState({
    name: "",
    chatId: "",
  });
  const [myid, setmyid] = useState("");
  useEffect(() => {
    conection1();
    showFriends();
   
  }, []);
  const conection1 = () => {
    socket.on("connect", function () {
      const sessionID = socket.id; //
      //console.log({ sessionID });
      setmyid(sessionID);
      updateuser(sessionID);
    });
  };

  const showFriends = async () => {
    let data = await postman("get", "/getFriends");
    //console.log("user details of frineds", data.data);
    setData(data.data);
  };

  const updateuser = async (id) => {
    let data = await postman("post", "/updateUser", { chatId: id });
  };

  return (
    <>
      <h1>Welcome to Friends component</h1>

      {/* {data.length > 0
        ? data.map((val) => {
            return (
              <>
                <h2>{val.fidname}</h2>
                <Button variant="contained" color="success">
                  <MessageIcon
                    onClick={() => {
                      setsshow(true);
                      //console.log({ val });
                      setchat({
                        ...chat,
                        name: val.fidname,
                        chatId: val.chatId,
                      });
                    }}
                  />
                </Button>
                <Modal
                  isOpen={show}
                  // onAfterOpen={afterOpenModal}
                  // onRequestClose={closeModal}
                  // style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2>Hello</h2>
                  <button>close</button>
                  <div>I am a modal</div>
                  <Chat socket={socket} chatid={chat} myid={myid} />
                </Modal>
              </>
            );
          })
        : ""} */}

      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <PersonSearchIcon
                onClick={() => {
                  setsearchbar(!searchbar);
                }}
              />
            </Avatar>
            {searchbar ? (
              <>
                <input type="text" />
              </>
            ) : (
              ""
            )}

            <h2 style={headerStyle}>Friends</h2>
            <Fade left>
              {data.length > 0
                ? data.map((val, ind) => {
                    return (
                      <>
                        <Card key={ind} sx={{ maxWidth: 430 }}>
                          <CardHeader
                            avatar={
                              <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                                // src={ele.pic}
                              ></Avatar>
                            }
                            action={
                              <IconButton aria-label="settings">
                                <Button variant="contained" color="success">
                                  <MessageIcon
                                    onClick={() => {
                                      setsshow(true);
                                      //console.log({val})
                                      setchat({
                                        ...chat,
                                        name: val.fidname,
                                        chatId: val.userid,
                                      });
                                    }}
                                  />
                                </Button>
                              </IconButton>
                            }
                            title={val.fidname}
                            var newName ={val.fidname}

                            subheader=""
                          />
                        </Card>

                       
                      </>
                    );
                  })
                : ""}
            </Fade>

            <Modal
                          isOpen={show}
                          // onAfterOpen={afterOpenModal}
                          // onRequestClose={closeModal}
                          // style={customStyles}
                          contentLabel="Example Modal"
                        >
                          {/* <h2>Hello</h2> */}
                          {/* <button>close</button> */}
                          {/* <div>I am a modal</div> */}
                          {/* <h1>{JSON.stringify(chat)}</h1> */}
                          <Chat socket={socket} chatid={chat} myid={myid} />
                        </Modal>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
