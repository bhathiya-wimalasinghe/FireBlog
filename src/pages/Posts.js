import {
  Box,
  Container,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Post from "../components/Post";
import postImg from "../images/post.jpg";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";

export default function Posts() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
      <Typography
        textAlign="center"
        margin={1}
        component="h1"
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "600" }}
      >
        Find Articles
      </Typography>
      <Box>
        <TextField
          id="outlined-basic"
          label="Search articles "
          variant="outlined"
          fullWidth
        />
      </Box>
      <Grid marginTop={3} container spacing={3}>
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
            content="This is sample content. This is sample content. This is sample content.This is sample content.This is sample content.This is sample content. This is sample content. This is sample content. This is sample content.This is sample content. This is sample content"
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
      <Box display="flex" justifyContent="center" margin={4}>
        <Pagination count={10} shape="rounded" size="large" />
      </Box>
    </Container>
  );
}
