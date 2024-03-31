import { Avatar, Paper, Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function Author(props) {
  const { name, noOfPosts, userImg } = props;
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "350px",
        margin: "5px",
        ":hover": { backgroundColor: "lightgray", cursor: "pointer" },
      }}
      elevation={3}
    >
      <Avatar src={userImg} sx={{ margin: 1, flex: "0.3", height: "50px" }} />
      <Box margin={1} flex={1.5}>
        <Typography variant="h6">{name}</Typography>
        <Typography>{noOfPosts} posts</Typography>
      </Box>
    </Paper>
  );
}

Author.propTypes = {
  name: PropTypes.string.isRequired,
  noOfPosts: PropTypes.number.isRequired,
  userImg: PropTypes.string.isRequired,
};

export default Author;
