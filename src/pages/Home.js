import React from "react";
import Box from "@mui/material/Box";
import backgroundImg from "../images/header_image.jpg";
import logo from "../images/fireblog-logo.svg";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
          height: "500px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "4rem",
        }}
      >
        <img
          style={{ width: "400px", height: "auto" }}
          alt="logo-white"
          src={logo}
        />
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}></Container>
    </div>
  );
}
