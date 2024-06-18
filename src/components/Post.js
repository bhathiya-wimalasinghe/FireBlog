import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  CardActionArea,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Delete, Edit } from "@mui/icons-material";

export default function Post(props) {
  const {
    img,
    title,
    userImg,
    uploadedDate,
    userName,
    category,
    id,
    isAuthor,
    handlePostDelete,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (isConfirm) => {
    setOpen(false);
    if (isConfirm) {
      handlePostDelete(id, title);
    }
  };

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
        <ButtonBase component={Link} to={`/article/${id}`}>
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
              <Chip style={{ minWidth: "100px" }} label={category} />
            </Box>
          </CardActionArea>
        </ButtonBase>
        {isAuthor && (
          <Stack
            direction="row"
            spacing={2}
            style={{ height: "40px" }}
            justifyContent="center"
            marginTop="10px"
          >
            <Button style={{ width: "100px" }} variant="outlined">
              <Edit />
            </Button>
            <Button
              onClick={handleClickOpen}
              style={{ width: "100px" }}
              color="error"
              variant="outlined"
            >
              <Delete />
            </Button>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Confirm Deletion"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Deleting the post titled "{title}" is a permanent action that
                  cannot be undone. Are you sure you want to delete it?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="error" onClick={() => handleClose(true)}>
                  Delete
                </Button>
                <Button onClick={() => handleClose(false)} autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        )}
      </Card>
    </Box>
  );
}

Post.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  uploadedDate: PropTypes.string,
  userName: PropTypes.string,
  category: PropTypes.string,
};
