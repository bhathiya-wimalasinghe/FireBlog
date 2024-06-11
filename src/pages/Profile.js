import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import userImg from "../images/user.jpg";
import { Delete, Upload } from "@mui/icons-material";
import { getAuth, updateProfile } from "firebase/auth";
import { styled } from "@mui/material/styles";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage, db } from "../firebase-config";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Post from "../components/Post";

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

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  const email = user.email;

  const userDetailsCollectionRef = collection(db, "userDescription");

  const postCollectionRef = collection(db, "posts");

  // get user detail from firestore
  React.useEffect(() => {
    getUserDetails();
    getArticlesByUser();
  }, []);

  const getUserDetails = async () => {
    try {
      const q = query(
        userDetailsCollectionRef,
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const fields = snapshot.docs[0]._document.data.value.mapValue.fields;
        const docId = snapshot.docs[0].id;
        setUserDetailsDocumentId(docId);
        setDescription(fields.description.stringValue);
        setPhoneNumber(fields.phoneNumber.stringValue);
      }
    } catch (error) {
      console.error("Eroor fetching user details ", error);
    }
  };

  const [articlesByUser, setArticlesByUser] = React.useState([]);

  const getArticlesByUser = async () => {
    try {
      const q = query(postCollectionRef, where("userId", "==", user.uid));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const postsData = [];
        snapshot.forEach((doc) => {
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
        console.log(articlesByUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [firstName, setFirstName] = React.useState(
    user && user.displayName ? user.displayName.split(" ")[0] : ""
  );

  const [lastName, setLastName] = React.useState(
    user && user.displayName ? user.displayName.split(" ")[1] : ""
  );

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [photoURL, setPhotoURL] = React.useState(
    user && user.photoURL ? user.photoURL : null
  );

  const [userDetailsDocumentId, setUserDetailsDocumentId] = React.useState("");

  const [description, setDescription] = React.useState("");

  const [file, setFile] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");

  const handleImage = (e) => {
    const selectedFile = e.target.files[0];
    const imgUrl = URL.createObjectURL(selectedFile);
    setPhotoURL(imgUrl);
    setFile(selectedFile);
  };

  const handleUpdate = async (e) => {
    // validate phone number
    const phoneRegex = /^\+[1-9]\d{10}$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) return;

    try {
      // handle profile pic upload
      if (!user.photoURL && photoURL) {
        console.log(file + "something");
        const storageRef = ref(storage, `users/${file.name}`);
        await uploadBytes(storageRef, file);
        const imgUrl = await getDownloadURL(storageRef);
        setPhotoURL(imgUrl);
      }

      // handle description and phone number upload
      if (description || phoneNumber) {
        console.log(userDetailsDocumentId);

        const userDocRef = doc(db, "userDescription", userDetailsDocumentId);
        await updateDoc(userDocRef, {
          description,
          phoneNumber,
          photoURL,
        });
      }

      // handle user details update
      const fullName = firstName + " " + lastName;

      await updateProfile(user, {
        displayName: fullName,
        photoURL,
      });
      setAlertMessage("Your profile is successfully updated");
      setOpen(true);
    } catch (error) {
      setAlertMessage("Something went wrong! Please try again later");
      setOpen(true);
      console.log(error);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box>
      <Container sx={{ marginTop: "100px", marginBottom: "40px" }}>
        <Typography component="h1" variant="h3">
          My Profile
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { sm: "column", md: "row" },
        }}
      >
        <Box marginBottom={3}>
          <img
            alt="username"
            src={photoURL || userImg}
            style={{
              width: "300px",
              borderRadius: "10px",
              maxHeight: "350px",
            }}
          />

          <Box
            maxWidth="300px"
            display="flex"
            justifyContent="space-around"
            marginTop={2}
          >
            <Button
              component="label"
              tabIndex={-1}
              variant="outlined"
              startIcon={<Upload />}
              onChange={handleImage}
              sx={{ ":hover": { backgroundColor: "lightcyan" } }}
            >
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
            <Button
              sx={{ ":hover": { backgroundColor: "lightcyan" } }}
              variant="outlined"
              startIcon={<Delete />}
            >
              Remove
            </Button>
          </Box>
        </Box>

        <Stack spacing={3}>
          <Box>
            <TextField
              required
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ marginRight: "10px" }}
            />

            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <TextField
            disabled
            id="outlined-basic"
            variant="outlined"
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Contact No:"
            variant="outlined"
            placeholder="Ex - +9470XXXXXXX"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="Description About You.."
            variant="outlined"
            multiline
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="contained" onClick={handleUpdate}>
            Update
          </Button>
        </Stack>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={
              alertMessage.includes("successfully") ? "success" : "error"
            }
            sx={{ width: "100%" }}
            variant="filled"
          >
            {alertMessage}
          </Alert>
        </Snackbar>
      </Container>
      {articlesByUser.length > 0 && (
        <Container sx={{ marginTop: "100px", marginBottom: "40px" }}>
          <Typography component="h1" variant="h3">
            My Articles
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
                  userImg={photoURL}
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
  );
}
