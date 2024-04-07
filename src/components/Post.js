import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Box, ButtonBase, CardActionArea, Chip } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Post(props) {
  const { img, title, content, userImg, uploadedDate, userName, category } =
    props;

  return (
    <Box>
      <Card
        sx={{
          maxWidth: "100%",
          border: "1px solid transparent",
          borderRadius: "20px",
          backgroundColor: "#eeeeee",
          ":hover": {
            border: "1px solid gray",
            cursor: "pointer",
          },
          padding: "10px",
        }}
      >
        <ButtonBase component={Link} to="/singlepost">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Post Image"
              height="140"
              image={img}
              sx={{
                height: 240,
                transition: "transform 0.3s ease-in-out",
                ":hover": { transform: "scale(1.05)" },
                borderRadius: "20px",
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  height: "60px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                margin: "0 10px",
                justifyContent: "space-between",
              }}
            >
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
              <Chip label={category} />
            </Box>
          </CardActionArea>
        </ButtonBase>
      </Card>
    </Box>
  );
}

Post.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userImg: PropTypes.string,
  uploadedDate: PropTypes.string,
  userName: PropTypes.string,
  category: PropTypes.string,
};
