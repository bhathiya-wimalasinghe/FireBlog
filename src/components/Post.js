import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardActions } from "@mui/material";
import { BookmarkBorder } from "@mui/icons-material";

export default function Post(props) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: "1px solid transparent",
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
        image={props.img}
        sx={{ height: 240 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
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
          {props.content}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          margin: "0 10px",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"}>
          <Avatar src={props.userImg} />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              {props.userName}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {props.uploadedDate}
            </Typography>
          </Box>
        </Box>
        <Box>
          <BookmarkBorder />
        </Box>
      </CardActions>
    </Card>
  );
}
