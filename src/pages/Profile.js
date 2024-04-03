import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import userImg from "../images/Bhathiya_Wimalasinghe.jpg";
import { Delete, Upload } from "@mui/icons-material";

export default function Profile() {
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
        }}
      >
        <Box>
          <img
            alt="username"
            src={userImg}
            style={{ width: "300px", borderRadius: "10px" }}
          />
          <Box display="flex" justifyContent="space-around" marginTop={2}>
            <Button variant="outlined" startIcon={<Upload />}>
              Upload
            </Button>
            <Button variant="outlined" startIcon={<Delete />}>
              Remove
            </Button>
          </Box>
        </Box>

        <Stack spacing={3}>
          <Box>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />

            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </Box>
          <TextField
            disabled
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No:"
            variant="outlined"
          />
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
          <Button variant="contained">Change Password</Button>
          <TextField
            id="outlined-basic"
            label="Description About You.."
            variant="outlined"
            multiline
          />
          <Button variant="contained">Update</Button>
        </Stack>
      </Container>
    </Box>
  );
}
