import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActions } from "@mui/material";
import { BookmarkBorder, Scale } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function Post(props) {
  const { img, title, content, userImg, uploadedDate, userName } = props;

  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: "1px solid transparent",
        borderRadius: "20px",
        ":hover": {
          border: "1px solid gray",
          cursor: "pointer",
          backgroundColor: "lightgray",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
        sx={{
          height: 240,
          transition: "transform 0.3s ease-in-out",
          ":hover": { transform: "scale(1.05)" },
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          margin: "0 10px",
          justifyContent: "space-between",
        }}
      >
        {userName && (
          <Box display={"flex"}>
            <Avatar src={userImg} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {userName}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {uploadedDate}
              </Typography>
            </Box>
          </Box>
        )}
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userImg: PropTypes.string,
  uploadedDate: PropTypes.string,
  userName: PropTypes.string,
};
