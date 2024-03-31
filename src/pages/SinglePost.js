import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import postImg from "../images/post.jpg";
import AuthorMini from "../components/AuthorMini";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import Post from "../components/Post";

export default function SinglePost() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Typography textAlign="center" margin={1} component="h1" variant="h3">
          THE 6 BEST HOTELS IN PRAGUE
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          marginBottom={2}
        >
          <img width="80%" src={postImg} alt="Post" />;
        </Box>

        <Box display="flex" justifyContent="center">
          <AuthorMini
            name="Bhathiya Wimalasinghe"
            publishedDate="1 hour ago"
            userImg={userImg}
          />
        </Box>
        <Divider />
        <Typography textAlign="center" margin={1} component="p">
          Post Content Here. ReactQuill 2 is here, baby! And it brings a full
          port to TypeScript and React 16+, a refactored build system, and a
          general tightening of the internal logic. We worked hard to avoid
          introducing any behavioral changes. For the vast majority of the
          cases, no migration is necessary at all. However, support for
          long-deprecated props, the ReactQuill Mixin, and the Toolbar component
          have been removed. Be sure to read the migration guide. We expect this
          release to be a drop-in upgrade – if that isn't the case, please file
          an issue with the v2 label.
        </Typography>
        <Divider />
        <Box>
          <Typography marginTop={4} component="h2" variant="h4">
            Other articles published by Bhathiya Wimalasinghe
          </Typography>
          <Grid container spacing={3} marginTop={2}>
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
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
