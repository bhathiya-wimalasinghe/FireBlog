import { Box, Typography } from "@mui/material";
import React from "react";
import backgroundImg from "../images/header_image.jpg";

export default function About() {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5 ), rgba(0, 0, 0, 0.8)), url(${backgroundImg})`,
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "black",
          fontSize: "4rem",
        }}
      >
        <Typography marginTop="150px" variant="h3" fontWeight="bold">
          About FireBlog
        </Typography>
        <Typography
          marginTop={4}
          width="70%"
          color="white"
          fontSize="20px"
          fontWeight="light"
          textAlign="center"
        >
          At FireBlog, we believe that everyone has a story to tell and a voice
          that deserves to be heard. Whether you're a seasoned writer or someone
          who's just starting to explore the world of blogging, FireBlog is your
          platform to share your thoughts, experiences, and insights with the
          world.
          <br />
          <br />
          Ready to join the FireBlog community and start sharing your stories
          with the world? Signing up is quick, easy, and completely free!
          Whether you're a passionate writer, an avid reader, or someone who
          simply loves to explore new ideas, there's a place for you here at
          FireBlog.
          <br />
          <br />
          Ignite your passion for writing and let your voice be heard - join
          FireBlog today!
        </Typography>
      </Box>
    </div>
  );
}
