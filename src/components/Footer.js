import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../images/FireBlog.svg";
import { IconButton, Stack } from "@mui/material";
import { GitHub, LinkedIn, X } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="http://www.linkedin.com/in/bhathiya-wimalasinghe"
      >
        Bhathiya Wimalasinghe
      </Link>{" "}
      {new Date().getFullYear()}
      {". All Rights Reserved."}
    </Typography>
  );
}

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

export default function Footer() {
  return (
    <Box mt={2} component="footer" sx={{ bgcolor: "lightgray", py: 2 }}>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <img alt="fireblog logo" src={logo} style={logoStyle} />
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h6">Follow Us</Typography>
          <Stack direction="row">
            <IconButton
              aria-label="GitHub"
              href="http://www.github.com/bhathiya-wimalasinghe"
            >
              <GitHub />
            </IconButton>
            <IconButton aria-label="X" href="https://twitter.com/Bhathiya_1996">
              <X />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="http://www.linkedin.com/in/bhathiya-wimalasinghe"
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      <Copyright />
    </Box>
  );
}
