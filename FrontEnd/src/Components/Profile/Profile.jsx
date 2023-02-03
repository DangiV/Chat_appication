import * as React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import { Grid, Paper } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import PeopleIcon from "@mui/icons-material/People";
import QrCodeIcon from "@mui/icons-material/QrCode";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LanguageIcon from "@mui/icons-material/Language";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Profile = () => {
  const paperStyle = { padding: "30px 20px", width: "650px", margin: "0 auto" };
  const headerStyle = { margin: "10px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const backColor = { backgroundColor: "" };

  return (
    <>
      <h1>welcome to user profile page</h1>

      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center" style={{ backgroundColor: "#1790bb" }}>
            <Avatar style={avatarStyle}>
              <InsertEmoticonIcon />
            </Avatar>
            <h2 style={headerStyle}>Profile</h2>
            <Card
              sx={{ maxWidth: 345 }}
              style={{ backgroundColor: "aquamarine" }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="Qr">
                    <QrCodeIcon style={{ backgroundColor: "#6bd04f" }} />
                  </IconButton>
                }
                title="Ragnar"
                subheader="(If you don't know me, Don't judge me)"
              />
            </Card>
            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<KeyIcon />}
                title="Account"
                subheader="Security notifacition,change number"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<LockIcon />}
                title="Privacy"
                subheader="Block contacts,disappearing message"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<ChatIcon />}
                title="Chats"
                subheader="Theme,wallpapers,chat history"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<NotificationsActiveIcon />}
                title="Notifactions"
                subheader="Message,group & call tones"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<DataSaverOffIcon />}
                title="Storage and data"
                subheader="Network usage, auto-download"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<LanguageIcon />}
                title="App language"
                subheader="English(phone's language"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader
                avatar={<HelpOutlineIcon />}
                title="Help"
                subheader="Help centre, contact us, privacy policy"
              />
            </Card>

            <Card sx={{ maxWidth: 345 }} style={backColor}>
              <CardHeader avatar={<PeopleIcon />} title="Invite a friend" />
            </Card>
            <h5 style={{ marginTop: "25px" }}>From</h5>
            <Avatar style={avatarStyle}>
              <WhatsAppIcon />
            </Avatar>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default Profile;
