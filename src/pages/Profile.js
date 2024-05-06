import {
  Box,
  Button,
  Container,
  Input,
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
import { addDoc, collection } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

export default function Profile({ user }) {
  const currentUser = user.user;
  const email = currentUser.email;
  console.log(currentUser.displayName);

  const [firstName, setFirstName] = React.useState(
    currentUser && currentUser.displayName
      ? currentUser.displayName.split(" ")[0]
      : ""
  );

  const [lastName, setLastName] = React.useState(
    currentUser && currentUser.displayName
      ? currentUser.displayName.split(" ")[1]
      : ""
  );

  const [phoneNumber, setPhoneNumber] = React.useState(
    currentUser && currentUser.phoneNumber ? currentUser.phoneNumber : ""
  );
  const [photoURL, setPhotoURL] = React.useState(
    currentUser && currentUser.photoURL ? currentUser.photoURL : null
  );

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
      if (!currentUser.photoURL && photoURL) {
        console.log(file + "something");
        const storageRef = ref(storage, `users/${file.name}`);
        await uploadBytes(storageRef, file);
        const imgUrl = await getDownloadURL(storageRef);
        setPhotoURL(imgUrl);
      }

      // handle description upload
      if (description) {
        const postCollectionRef = collection(db, "userDescription");

        await addDoc(postCollectionRef, {
          description,
          userId: currentUser.uid,
        });
      }

      // handle user details update
      const fullName = firstName + " " + lastName;

      await updateProfile(user, {
        displayName: fullName,
        phoneNumber,
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

          <Button variant="contained">Change Password</Button>

          <TextField
            id="outlined-basic"
            label="Enter New Password"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
          />
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
    </Box>
  );
}
