import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import { GitHub, LinkedIn, X } from "@mui/icons-material";

export default function AuthorPage() {
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Stack direction={{ md: "row", sm: "column" }}>
        <img
          src={userImg}
          alt="userImg"
          style={{ height: "500px", width: "500px", borderRadius: "10px" }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginLeft={3}
        >
          <Typography
            component="h1"
            variant="h4"
            marginBottom={3}
            marginTop={3}
          >
            Hi! I'm Bhathiya Wimalasinghe
          </Typography>
          <Typography marginBottom={3}>
            This is sample description. You can add anything you want here. This
            is sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This i
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here. This is
            sample description. You can add anything you want here.{" "}
          </Typography>

          <Typography fontWeight="bold" marginBottom={2}>
            Follow Me!
          </Typography>

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
      </Stack>
    </Container>
  );
}
