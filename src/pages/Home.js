import React from "react";
import Box from "@mui/material/Box";
import backgroundImg from "../images/header_image.jpg";
import logo from "../images/fireblog-logo.svg";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import postImg from "../images/post.jpg";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import Post from "../components/Post";

export default function Home() {
  return (
    <div>
      {/**  Todo: Need to fix  homepage background images for mobile sites **/}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
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

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Technology
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Entertainment
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Finance
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Health
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Sport
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
          >
            View All
          </Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Post
              img={postImg}
              title="This is sample Title"
              content="This is sample content. This is sample content. This is sample content."
              userImg={userImg}
              uploadedDate="1 hour ago"
              userName="Bhathiya Wimalasinghe"
            />
          </Grid>
        </Grid>

        {/* Join now banner */}
        <Box
          sx={{
            backgroundColor: "#403f3d",
            marginTop: "50px",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: { md: "300px", xs: "250px" },
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            sx={{ fontSize: { md: "30px", xs: "18px" } }}
          >
            Join the FireBlog Community Today
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            width="80%"
            sx={{ fontSize: { md: "1rem", xs: "0.7rem" } }}
          >
            Ready to join the FireBlog community and start sharing your stories
            with the world? Signing up is quick, easy, and completely free!
            Whether you're a passionate writer, an avid reader, or someone who
            simply loves to explore new ideas, there's a place for you here at
            FireBlog.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              width: "200px",
              backgroundColor: "white",
              color: "black",
              ":hover": { backgroundColor: "lightgray" },
              fontWeight: "bold",
            }}
          >
            Join Now
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}></Container>
    </div>
  );
}
