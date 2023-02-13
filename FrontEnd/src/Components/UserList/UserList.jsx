import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { postman } from "../../Config/helper";
import "react-toastify/dist/ReactToastify.css";
import ListIcon from "@mui/icons-material/List";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import React, { useState, useEffect } from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const notify = () => toast("Request send!");

const UserList = () => {
  const paperStyle = { padding: "30px 20px", width: "430px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const [value, setValue] = useState([]);

  useEffect(() => {
    fetchlist();
  }, []);

  const fetchlist = async () => {
    let data = await postman("get", "/getalluser");
    //console.log("user data", data.data.data);

    setValue(data.data.data);
  };

  const sendlReq = async (id, name, surname) => {
    //console.log(id);
    const ids = {
      sendid: id,
      name: name + " " + surname,
    };
    let data = await postman("post", "/sendeRequest", ids);
    //console.log("user data is avilable here", data);
    fetchlist();
  };

  return (
    <>
      <h1>Welcome to user list component</h1>
      {/* {value.length > 0
          ? value.map((val) => {
              return (
                <>
                  <h1>{val.fname + " " + val.lname}</h1>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      sendlReq(val._id,val.fname,val.lname);
                    }}
                  >
                    Send
                  </Button>
                  
                </>
              );
            })
          : ""} */}
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <ListIcon />
            </Avatar>
            <h2 style={headerStyle}>User-List</h2>
            <Fade left>
              {value.length > 0
                ? value.map((val, ind) => {
                    return (
                      <Card key={ind} sx={{ maxWidth: 430 }}>
                        <CardHeader
                          action={
                            <IconButton aria-label="settings">
                              <Button
                                variant="contained"
                                color="success"
                                onClick={() => {
                                  sendlReq(val._id, val.fname, val.lname);
                                  notify();
                                }}
                              >
                                Send
                              </Button>
                            </IconButton>
                          }
                          title={val.fname + " " + val.lname}
                        />
                      </Card>
                    );
                  })
                : ""}
            </Fade>
          </Grid>
        </Paper>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default UserList;
