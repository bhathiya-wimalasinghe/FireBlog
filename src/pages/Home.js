import React from "react";
import Box from "@mui/material/Box";
import backgroundImg from "../images/header_image.jpg";
import logo from "../images/fireblog-logo.svg";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import Post from "../components/Post";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

// Todo: Need to get UserImg from firebase

export default function Home() {
  const postCollectionRef = collection(db, "posts");

  const [postsList, setPostsList] = React.useState(null);

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    console.log("getposts");
    try {
      const querySnapshot = await getDocs(postCollectionRef);

      const postsData = [];

      querySnapshot.forEach((doc) => {
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
      setPostsList(postsData);
    } catch (error) {
      console.log(error);
    }
  };

  const renderPostsCategory = (category) => {
    const filteredPosts = postsList.filter(
      (post) => post.category === category
    );

    return (
      <>
        {filteredPosts.map(
          (post, index) =>
            (index < 3 || filteredPosts.length <= 3) && (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <Post
                  img={post.imageUrl}
                  title={post.title}
                  content={post.content}
                  userImg={userImg}
                  uploadedDate={post.uploadedDateTime}
                  userName={post.authorName}
                  category={post.category}
                  id={post.id}
                />
              </Grid>
            )
        )}
      </>
    );
  };

  return (
    <div>
      {/**  Todo: Need to fix  homepage background images for mobile sites **/}
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`,
          height: { xs: "300px", md: "500px" },
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "4rem",
        }}
      >
        <img
          style={{ width: "400px  ", height: "auto" }}
          alt="logo-white"
          src={logo}
        />
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Technology
          </Typography>
          <Button variant="outlined" onClick={getPosts}>
            View All
          </Button>
        </Box>
        <Divider />
        <Grid container spacing={5} marginTop={2} marginBottom={5}>
          {renderPostsCategory("Technology")}
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Entertainment
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          {renderPostsCategory("Entertainment")}
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Finance
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          {renderPostsCategory("Finance")}
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Health
          </Typography>
          <Button variant="outlined">View All</Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          {renderPostsCategory("Health")}
        </Grid>

        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography component="h2" variant="h4">
            Sport
          </Typography>
          <Button
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
          >
            View All
          </Button>
        </Box>
        <Divider />
        <Grid container spacing={3} marginTop={2} marginBottom={5}>
          {renderPostsCategory("Sport")}
        </Grid>

        {/* Join now banner */}
        <Box
          sx={{
            backgroundColor: "#403f3d",
            marginTop: "50px",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: { md: "300px", xs: "250px" },
          }}
        >
          <Typography
            color="white"
            textAlign="center"
            sx={{ fontSize: { md: "30px", xs: "18px" } }}
          >
            Join the FireBlog Community Today
          </Typography>
          <Typography
            color="white"
            textAlign="center"
            width="80%"
            sx={{ fontSize: { md: "1rem", xs: "0.7rem" } }}
          >
            Ready to join the FireBlog community and start sharing your stories
            with the world? Signing up is quick, easy, and completely free!
            Whether you're a passionate writer, an avid reader, or someone who
            simply loves to explore new ideas, there's a place for you here at
            FireBlog.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              width: "200px",
              backgroundColor: "white",
              color: "black",
              ":hover": { backgroundColor: "lightgray" },
              fontWeight: "bold",
            }}
          >
            Join Now
          </Button>
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ marginTop: "50px" }}></Container>
    </div>
  );
}
