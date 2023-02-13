import DrawerCo from "./DrawerCom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setpage } from "../../Redux/navbar";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";

const Pages = ["User-List", "Friends", "Request"];

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    localStorage.clear();
  };
  const state = useSelector((state) => state);
  // //console.log("erferf", state)
  const [value, setValue] = useState();
  const [curr, setcurr] = useState();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddShoppingCartIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                SHOPEE
              </Typography>
              <DrawerCo />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {Pages.map((page, index) => {
                  return (
                    <>
                      <Link
                        onClick={() => {
                          dispatch(setpage(page));
                        }}
                        style={{ color: "white" }}
                      >
                        <Tab
                          key={index}
                          label={page}
                          onClick={() => {
                            setcurr(page);
                          }}
                        />
                      </Link>
                      <br></br>
                    </>
                  );
                })}
              </Tabs>

              {/* <Button sx={{ marginLeft: "auto" }} variant="contained">

                                    <InputLabel id="demo-simple-select-label" ><SettingsIcon />
                                        <Select>
                                            <Link to='/profile'>
                                                <MenuItem>Profile</MenuItem>
                                            </Link>
                                            <Link to='/'>
                                                <MenuItem>Logout</MenuItem>
                                            </Link>
                                        </Select>
                                    </InputLabel>
                                </Button> */}

              <div>
                <IconButton
                  // sx={{ marginLeft: "auto" }}
                  size="large"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Link to="/profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <Link to="/">
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Link>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
