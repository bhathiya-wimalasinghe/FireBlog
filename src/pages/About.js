import { Box, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../images/header_image.jpg";

export default function About() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          color: "black",
          fontSize: "4rem",
        }}
      >
        <Typography marginTop="150px" variant="h3">
          About FireBlog
        </Typography>
      </Box>
    </div>
  );
}
