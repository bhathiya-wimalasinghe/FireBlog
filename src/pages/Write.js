import { CloudUpload, Delete } from "@mui/icons-material";
import {
  Button,
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
} from "@mui/material";
import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "react-quill/dist/quill.snow.css";

import { storage, db, auth } from "../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

import { CircularProgress } from "@mui/material";

export default function Write({ isEdit }) {
  const { postId } = useParams();

  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");
  const [post, setPost] = React.useState(null);

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists) {
          let tempPost = docSnap.data();
          setPost(tempPost);
          setContent(tempPost.content);
          setCategory(tempPost.category);
          setImage(tempPost.imageUrl);
          setTitle(tempPost.title);
        } else {
          setError("This document does not exist.");
        }
      } catch (error) {
        setError("Something went wrong! Please try again later.");
        console.log(error);
      }
    };

    if (isEdit) {
      getPost();
    }
  }, [postId]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImage(imgUrl);
    setFile(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //handle image upload
      if (file) {
        const storageRef = ref(storage, `images/${title}/${file.name}`);
        await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(storageRef);
        setImage(imageUrl);
      }

      if (isEdit) {
        // handle post update
        const postDocRef = doc(db, "posts", postId);
        await updateDoc(postDocRef, {
          ...post,
          title,
          content,
          category,
          image,
          uploadedDateTime: new Date().toISOString(),
        });
      } else {
        // handle post upload
        const postCollectionRef = collection(db, "posts");

        await addDoc(postCollectionRef, {
          title,
          category,
          content,
          image,
          authorName: auth.currentUser.displayName,
          userId: auth.currentUser.uid,
          uploadedDateTime: new Date().toISOString(),
        });
      }

      setTitle("");
      setCategory("");
      setContent("");
      setImage(null);
      setFile(null);

      navigate("/");
    } catch (err) {
      setError("Something went wrong. Try again later");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link"],
      ["clean"],
    ],
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Container sx={{ marginTop: 2, minHeight: "100vh" }}>
      <Box height="100px"></Box>
      <Typography margin={1} component="h1" variant="h4">
        {isEdit ? "Edit" : "Write"}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        height="350px"
        marginBottom={2}
      >
        {image && (
          <Button
            sx={{
              position: "absolute",
              zIndex: "999",
              right: 25,
              ":hover": { cursor: "pointer" },
              color: "black",
            }}
            onClick={() => setImage(null)}
          >
            <Delete />
          </Button>
        )}

        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={!image && <CloudUpload />}
          sx={{
            width: "100%",
            backgroundColor: "lightgray",
            ":hover": { backgroundColor: "lightcyan" },
            color: "black",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          onChange={handleImage}
        >
          {!image && "Upload Your Image Here"}
          <VisuallyHiddenInput type="file" />
        </Button>
      </Box>
      <Box
        marginBottom={2}
        component="form"
        display="flex"
        noValidate
        autoComplete="off"
        flexDirection={{ md: "row", xs: "column" }}
      >
        <TextField
          sx={{ marginRight: 1 }}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Box display="flex" flexDirection="row" marginTop={{ xs: 1, md: 0 }}>
          <FormControl sx={{ minWidth: "120px", marginRight: 1 }}>
            <InputLabel id="lbl-category">Category</InputLabel>
            <Select
              labelId="lbl-category"
              id="cetegory-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
              <MenuItem value={"Finance"}>Finance</MenuItem>
              <MenuItem value={"Health"}>Health</MenuItem>
              <MenuItem value={"Sport"}>Sport</MenuItem>
              <MenuItem value={"Technology"}>Technology</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            size="large"
            disabled={!image || !title || !content || !category}
            onClick={(e) => handleUpload(e)}
            startIcon={
              loading ? <CircularProgress size={24} color="inherit" /> : null
            }
          >
            {loading ? "Publishing..." : isEdit ? "Update" : "Publish"}{" "}
          </Button>
        </Box>
      </Box>
      <ReactQuill
        placeholder="Tell your story here.."
        modules={modules}
        theme="snow"
        value={content}
        onChange={setContent}
      />
      {error && <Alert severity="error">{error}</Alert>}
    </Container>
  );
}
