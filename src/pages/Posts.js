import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Post from "../components/Post";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase-config";

export default function Posts() {
  const [postsList, setPostsList] = React.useState(null);
  const [btnVariant, setBtnVariant] = React.useState({
    Entertainment: "outlined",
    Finance: "outlined",
    Health: "outlined",
    Technology: "outlined",
    Sport: "outlined",
  });

  const postCollectionRef = collection(db, "posts");

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      // const q = query(postCollectionRef, where("category", "==", "Technology"));
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
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCategoryButtons = (clickedCategory) => {
    setBtnVariant((prevBtnVariant) => {
      const updatedBtnVariant = {};
      Object.keys(prevBtnVariant).forEach((category) => {
        updatedBtnVariant[category] =
          category === clickedCategory
            ? prevBtnVariant[category] === "contained"
              ? "outlined"
              : "contained"
            : "outlined";
      });
      return updatedBtnVariant;
    });
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
      <Typography
        textAlign="center"
        margin={1}
        component="h1"
        sx={{ fontSize: { sm: "30px", xs: "20px" }, fontWeight: "600" }}
      >
        Find Articles
      </Typography>
      <Box display="flex">
        <TextField
          id="outlined-basic"
          label="Search articles "
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" sx={{ marginLeft: "10px", width: "150px" }}>
          Find
        </Button>
      </Box>
      <Box
        margin={2}
        display="flex"
        justifyContent="space-around"
        sx={{ flexDirection: { sm: "row", xs: "column" } }}
      >
        <Button
          onClick={() => toggleCategoryButtons("Entertainment")}
          variant={btnVariant.Entertainment}
          fullWidth
          sx={{ margin: "10px" }}
        >
          Entertainment
        </Button>
        <Button
          onClick={() => toggleCategoryButtons("Finance")}
          variant={btnVariant.Finance}
          fullWidth
          sx={{ margin: "10px" }}
        >
          Finance
        </Button>
        <Button
          onClick={() => toggleCategoryButtons("Health")}
          variant={btnVariant.Health}
          fullWidth
          sx={{ margin: "10px" }}
        >
          Health
        </Button>
        <Button
          onClick={() => toggleCategoryButtons("Technology")}
          variant={btnVariant.Technology}
          fullWidth
          sx={{ margin: "10px" }}
        >
          Technology
        </Button>
        <Button
          onClick={() => toggleCategoryButtons("Sport")}
          variant={btnVariant.Sport}
          fullWidth
          sx={{ margin: "10px" }}
        >
          Sport
        </Button>
      </Box>
      <Grid marginTop={3} container spacing={5}>
        {postsList ? (
          postsList.map((post) => (
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
                userImg={userImg}
                uploadedDate={post.uploadedDateTime}
                userName={post.authorName}
                category={post.category}
              />
            </Grid>
          ))
        ) : (
          <Typography textAlign="center" width="100%">
            There is no post that matches search query
          </Typography>
        )}
      </Grid>
      <Box display="flex" justifyContent="center" margin={4}>
        <Pagination count={10} shape="rounded" size="large" />
      </Box>
    </Container>
  );
}
