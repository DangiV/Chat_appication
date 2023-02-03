import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Pages = ["User-List", "Friends", "Request", "Signup", "Sigin"];

function DrawerCo() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}></ListItemButton>
          {Pages.map((page, index) => (
            <>
              <Link to={"/" + page}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </Link>
              <br></br>
            </>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerCo;
