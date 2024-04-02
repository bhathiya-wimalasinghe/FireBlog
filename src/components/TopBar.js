import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import img from "../images/FireBlog.svg";
import userImage from "../images/Bhathiya_Wimalasinghe.jpg";
import { Avatar } from "@mui/material";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

export default function TopBar() {
  const user = true;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              bgcolor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                px: 0,
              }}
            >
              <Link to="/">
                <img src={img} style={logoStyle} alt="logo of fireblog" />
              </Link>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Typography variant="body2" color="text.primary">
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    <Typography variant="body2" color="text.primary">
                      About
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link style={{ textDecoration: "none" }} to="/authors">
                    <Typography variant="body2" color="text.primary">
                      Authors
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link style={{ textDecoration: "none" }} to="/write">
                    <Typography variant="body2" color="text.primary">
                      Write
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem sx={{ py: "6px", px: "12px" }}>
                  <Link style={{ textDecoration: "none" }} to="/articles">
                    <Typography variant="body2" color="text.primary">
                      Articles
                    </Typography>
                  </Link>
                </MenuItem>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            >
              {user ? (
                <Box
                  display="flex"
                  alignItems="center"
                  width="300px"
                  justifyContent="space-around"
                >
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
                    to="/profile"
                  >
                    <Avatar
                      alt="username"
                      src={userImage}
                      sx={{ marginRight: "20px" }}
                    />
                    My Profile
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/logout"
                  >
                    Log out
                  </Button>
                </Box>
              ) : (
                <div>
                  <Button
                    color="primary"
                    variant="text"
                    size="small"
                    component={Link}
                    to="/signin"
                  >
                    Sign in
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={Link}
                    to="/signup"
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px", marginLeft: "20px" }}
              >
                {user && (
                  <Avatar
                    alt="username"
                    src={userImage}
                    sx={{ marginRight: "20px" }}
                  />
                )}
                <MenuIcon />
              </Button>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <MenuItem>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/"
                      onClick={toggleDrawer(false)}
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/about"
                      onClick={toggleDrawer(false)}
                    >
                      About
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/authors"
                      onClick={toggleDrawer(false)}
                    >
                      Authors
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/write"
                      onClick={toggleDrawer(false)}
                    >
                      Write
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/articles"
                      onClick={toggleDrawer(false)}
                    >
                      Articles
                    </Link>
                  </MenuItem>
                  <Divider />
                  {user ? (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="text"
                        size="small"
                        component={Link}
                        to="/profile"
                        onClick={toggleDrawer(false)}
                      >
                        My Profile
                      </Button>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        component={Link}
                        to="/signup"
                        sx={{ width: "100%" }}
                        onClick={toggleDrawer(false)}
                      >
                        Sign up
                      </Button>
                    </MenuItem>
                  )}

                  {user ? (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        component={Link}
                        to="/logout"
                        onClick={toggleDrawer(false)}
                      >
                        Log out
                      </Button>
                    </MenuItem>
                  ) : (
                    <MenuItem>
                      <Button
                        color="primary"
                        variant="outlined"
                        component={Link}
                        to="/signin"
                        sx={{ width: "100%" }}
                        onClick={toggleDrawer(false)}
                      >
                        Sign in
                      </Button>
                    </MenuItem>
                  )}
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
