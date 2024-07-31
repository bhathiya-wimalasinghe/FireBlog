import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AuthorMini from "../components/AuthorMini";
import userImg from "../images/user.jpg";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import ReactQuill from "react-quill";

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [userImage, setUserImage] = React.useState(userImg);
  const [userId, setUserId] = React.useState(null);
  const [articlesByUser, setArticlesByUser] = React.useState([]);

  const userDetailsCollectionRef = collection(db, "userDescription");
  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          let tempPost = docSnap.data();
          const uploadedDate = new Date(tempPost.uploadedDateTime);
          const formattedDate = uploadedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          tempPost.uploadedDateTime = formattedDate;

          setPost(tempPost);
          setUserId(tempPost.userId);
        } else {
          setError("This document does not exist.");
        }
      } catch (error) {
        setError("Something went wrong! Please try again later.");
        console.log(error);
      }
    };

    getPost();
  }, [postId]);

  useEffect(() => {
    const getUserDetailsAndArticles = async () => {
      if (userId) {
        try {
          // Fetch user details
          const q = query(
            userDetailsCollectionRef,
            where("userId", "==", userId)
          );
          const snapshot = await getDocs(q);
          if (!snapshot.empty) {
            const fields =
              snapshot.docs[0]._document.data.value.mapValue.fields;
            setUserImage(fields.photoURL.stringValue);
          }

          // Fetch articles by user
          const articlesQuery = query(
            postCollectionRef,
            where("userId", "==", userId)
          );
          const articlesSnapshot = await getDocs(articlesQuery);
          if (!articlesSnapshot.empty) {
            const postsData = [];
            articlesSnapshot.forEach((doc) => {
              const postData = doc.data();
              const uploadedDate = new Date(postData.uploadedDateTime);
              const formattedDate = uploadedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const postInfo = {
                id: doc.id,
                imageUrl: postData.imageUrl,
                title: postData.title,
                content: postData.content,
                uploadedDateTime: formattedDate,
                authorName: postData.authorName,
                category: postData.category,
              };
              postsData.push(postInfo);
            });
            setArticlesByUser(postsData);
          }
        } catch (error) {
          console.log(
            "Error occurs while getting user details or articles ",
            error
          );
        }
      }
    };

    getUserDetailsAndArticles();
  }, [userId]);

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
          <Box display="flex" justifyContent="center" alignItems="center">
            <AuthorMini
              name={post.authorName}
              publishedDate={post.uploadedDateTime}
              userImg={userImage}
            />
          </Box>
          <Divider />

          <ReactQuill value={post.content} readOnly={true} theme="bubble" />

          <Divider />
          <Box>
            {articlesByUser.length > 0 && (
              <Container sx={{ marginTop: "100px", marginBottom: "40px" }}>
                <Typography component="h2" variant="h4">
                  Other Articles By {post.authorName}
                </Typography>
                <Grid container spacing={3} marginTop={2}>
                  {articlesByUser.map((post) => (
                    <Grid
                      item
                      key={post.id}
                      xs={12}
                      sm={6}
                      md={4}
                      display="flex"
                      justifyContent="center"
                    >
                      <Post
                        img={post.imageUrl}
                        title={post.title}
                        content={post.content}
                        userImg={userImage}
                        uploadedDate={post.uploadedDateTime}
                        userName={post.authorName}
                        category={post.category}
                        id={post.id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Container>
            )}
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
