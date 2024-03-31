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
        <Typography
          textAlign="center"
          margin={1}
          component="h1"
          sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "600" }}
        >
          THE 6 BEST HOTELS IN PRAGUE
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          marginBottom={2}
        >
          <img width="100%" src={postImg} alt="Post" />;
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
          1. Understand your audience. Before you start writing your blog post,
          make sure you have a clear understanding of your target audience. To
          do so, take the following steps. Ask yourself exploratory questions.
          To discover your audience, ask questions like: Who are they? Are they
          like me, or do I know someone like them? What do they want to know
          about? What will resonate with them? Jot down your notes in a notepad
          or a document. This is the time to brainstorm audience attributes from
          scratch, no matter how out of left field they may feel. You should
          also think about your audience's age, background, goals, and
          challenges at this stage. Post Content Here. ReactQuill 2 is here,
          baby! And it brings a full port to TypeScript and React 16+, a
          refactored build system, and a general tightening of the internal
          logic. We worked hard to avoid introducing any behavioral changes. For
          the vast majority of the cases, no migration is necessary at all.
          However, support for long-deprecated props, the ReactQuill Mixin, and
          the Toolbar component have been removed. Be sure to read the migration
          guide. We expect this release to be a drop-in upgrade – if that isn't
          the case, please file an issue with the v2 label.
        </Typography>
        <Divider />
        <Box>
          <Typography
            marginTop={4}
            component="h2"
            sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "600" }}
          >
            Other articles published by Bhathiya Wimalasinghe
          </Typography>
          <Grid container spacing={3} marginTop={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Post
                img={postImg}
                title="This is sample Title"
                content="This is sample content. This is sample content. This is sample content."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Post
                img={postImg}
                title="This is sample Title"
                content="This is sample content. This is sample content. This is sample content."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Post
                img={postImg}
                title="This is sample Title"
                content="This is sample content. This is sample content. This is sample content."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Post
                img={postImg}
                title="This is sample Title"
                content="This is sample content. This is sample content. This is sample content."
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
