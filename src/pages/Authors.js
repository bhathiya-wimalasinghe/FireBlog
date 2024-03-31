import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Author from "../components/Author";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";

export default function Authors() {
  return (
    <Container sx={{ minHeight: "100vh" }}>
      <Box height="100px"></Box>
      <Typography margin={1} component="h1" variant="h4">
        Authors
      </Typography>
      <Box>
        <Grid container spacing="3" rowGap={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Author
              name="Bhathiya Wimalasinghe"
              noOfPosts={2}
              userImg={userImg}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Author
              name="Bhathiya Wimalasinghe"
              noOfPosts={2}
              userImg={userImg}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Author
              name="Bhathiya Wimalasinghe"
              noOfPosts={2}
              userImg={userImg}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
