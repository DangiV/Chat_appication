import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { postman } from "../../Config/helper";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { Avatar, Grid, Paper } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import RequestPageIcon from "@mui/icons-material/RequestPage";

const Request = () => {
  const paperStyle = { padding: "30px 20px", width: "490px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };




  const [value, setValue] = useState([]);

  useEffect(() => {
    fetchrequest();
  }, []);

  const fetchrequest = async () => {
    let data = await postman("post", "/showRequest");
    //console.log(data);
    setValue(data.data.data);
  };

  const AccepetReq = async(id,name) => {

    const ids = {
      id: id,
      name:name
    };

    let datauser = await postman("post", "/AcceptRequest", ids);
    //console.log("user accept data", datauser);

  };

  const DeleteReq = async (id) => {
    const ids = {
      id: id,
    };

    let datauser = await postman("post", "/DeleteRequest", ids);
    //console.log("user dlelte data", datauser);
    fetchrequest();

 
  };

  return (
    <>
      <h1>Welcome User request component</h1>
      {value.length > 0
          ? value.map((val, index) => {
              //console.log("valllllllllll", val);
              return (
                <div key={index}>
                
                  <h1>{val.sendername}</h1>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      AccepetReq(val.senderId,val.sendername);
                      DeleteReq(val._id);
                    }}
                  >
                    accept
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ marginLeft: "12px" }}
                    onClick={() => {
                      DeleteReq(val._id);
                    }}
                  >
                    Delete
                  </Button>
                </div>
              );
            })
          : ""}
      {/* <Grid>
       

        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <RequestPageIcon />
            </Avatar>
            <h2 style={headerStyle}>Friend-Request</h2>
            <Fade left>
            {
                            value.map((curEle) => {
                                return (
                                    <Card sx={{ maxWidth: 430 }} key={curEle.id}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={curEle.pic}>
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">

                                                    <Button variant="contained" color="success" onClick={() => { AccepetReq(curEle.id); }}>
                                                        Accept
                                                    </Button>
                                                    <Button variant="outlined" color="error" sx={{ marginLeft: '12px' }} onClick={() => { DeleteReq(curEle.id); }}>
                                                        Delete
                                                    </Button>
                                                </IconButton>

                                            }

                                            title={curEle.title}
                                            subheader=""
                                        />

                                    </Card>
                                )
                            })
                        }
            </Fade>
          </Grid>
        </Paper>
      </Grid> */}


      
      <ToastContainer />
    </>
  );
}

export default Request;
