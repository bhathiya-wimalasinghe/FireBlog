import { Avatar, Paper, Box, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function AuthorMini(props) {
  const { name, publishedDate, userImg } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "5px",
        ":hover": { backgroundColor: "lightgray", cursor: "pointer" },
      }}
    >
      <Avatar src={userImg} sx={{ margin: 1, height: "50px", width: "50px" }} />
      <Box margin={1}>
        <Typography variant="h6">By {name}</Typography>
        <Typography>Published {publishedDate} </Typography>
      </Box>
    </Box>
  );
}

AuthorMini.propTypes = {
  name: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
};
