import { Box, Container, Typography } from "@mui/material";
import React from "react";
import postImg from "../images/post.jpg";

export default function SinglePost() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Typography textAlign="center" margin={1} component="h1" variant="h4">
          Post Title Here
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          marginBottom={2}
        >
          <img width="80%" src={postImg} alt="Post" />;
        </Box>
        <Typography textAlign="center" margin={1} component="text">
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
      </Container>
    </div>
  );
}
