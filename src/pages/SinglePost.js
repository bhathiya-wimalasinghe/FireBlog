import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import postImg from "../images/post.jpg";
import AuthorMini from "../components/AuthorMini";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Height } from "@mui/icons-material";

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const docRef = doc(db, "posts", postId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        const tempPost = docSnap.data();
        const uploadedDate = new Date(tempPost.uploadedDateTime);
        const formattedDate = uploadedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        tempPost.uploadedDateTime = formattedDate;
        setPost(tempPost);
      } else {
        setError("This document does not exist.");
      }
    } catch (error) {
      setError("Something went wrong! Please try again later");
      console.log(error);
    }
  };

  return (
    <div>
      {post ? (
        <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
          <Typography
            textAlign="center"
            margin={1}
            component="h1"
            sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "600" }}
          >
            {post.title}
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            width="100%"
            marginBottom={2}
          >
            <img width="100%" src={post.imageUrl} alt="Post" />;
          </Box>
          <Box display="flex" justifyContent="center">
            <AuthorMini
              name={post.authorName}
              publishedDate={post.uploadedDateTime}
              userImg={userImg}
            />
          </Box>
          <Divider />
          <Typography textAlign="center" margin={1} component="p">
            {post.content}
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
            </Grid>
          </Box>
        </Container>
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: "100px", Height: "100vh" }}>
          {error ? error : "Wait...."}
        </Container>
      )}
    </div>
  );
}
