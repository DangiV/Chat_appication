import { Avatar, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { postman } from "../../Config/helper";

export default function Friend(props) {
  const paperStyle = { padding: "30px 20px", width: "490px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };



  const [data, setData] = useState([]);
  const [searchbar, setsearchbar] = useState(false);

useEffect(()=>{
  showFriends()

},[])

const showFriends = async()=>{
  let data = await postman("get","/getFriends");
  console.log("user details of frineds" , data.data);
  setData(data.data);
}

 

  return (
    <>
      <h1>Welcome to Friends component</h1>


      {/* {
        data.length > 0 
        ? data.map((val)=>{
          return(
                <h2>{val.fidname}</h2>
          )
        })
    : ""  } */}

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
            {
            data.length > 0 
            ? data.map((val)=>{
                return (
                  <>
                    <Card sx={{ maxWidth: 430 }}>
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
                              <Link to="/chat" style={{ color: "white" }}>
                                <MessageIcon />
                              </Link>
                            </Button>
                          </IconButton>
                        }
                        title={val.fidname}
                        subheader=""
                      />
                    </Card>
                  </>
                );
              })
              : ""}
            </Fade>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
}
