import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import validator from "validator";

import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Alert } from "@mui/material";

export default function SignUp() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!firstName) {
      setTimeout(() => {
        setError("firstname");
      }, 10);
      return;
    }

    if (!lastName) {
      setTimeout(() => {
        setError("lastname");
      }, 10);
      return;
    }

    if (!emailRegex.test(email)) {
      setTimeout(() => {
        setError("email");
      }, 10);
      return;
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setTimeout(() => {
        setError("password");
      }, 10);
      return;
    }

    setError("");

    const fullName = firstName + " " + lastName;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: fullName });
      navigate("/");
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        setError("This email is already exists in the system");
      } else {
        console.log("An error occurred while registering user:", error.message);
        setError("Something went wrong! Try again later");
      }
    }
  };

  return (
    <div>
      <Box height="50px"></Box>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error === "firstname"}
                  helperText={error === "firstname" && "Enter your first name"}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  sx={{
                    "@keyframes shake": {
                      "0%, 100%": { transform: "translateX(0)" },
                      "10%, 30%, 50%, 70%, 90%": {
                        transform: "translateX(-5px)",
                      },
                      "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                    },
                    "& .Mui-error": {
                      animation: "shake 0.2s",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  error={error === "lastname"}
                  helperText={error === "lastname" && "Enter your last name"}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  sx={{
                    "@keyframes shake": {
                      "0%, 100%": { transform: "translateX(0)" },
                      "10%, 30%, 50%, 70%, 90%": {
                        transform: "translateX(-5px)",
                      },
                      "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                    },
                    "& .Mui-error": {
                      animation: "shake 0.2s",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error === "email"}
                  helperText={error === "email" && "Enter valid email address"}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "@keyframes shake": {
                      "0%, 100%": { transform: "translateX(0)" },
                      "10%, 30%, 50%, 70%, 90%": {
                        transform: "translateX(-5px)",
                      },
                      "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                    },
                    "& .Mui-error": {
                      animation: "shake 0.2s",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={error === "password"}
                  helperText={
                    error === "password" &&
                    "Password must be atleast 8 characters long. It must includes atleast 1 number,1 symbol and 1 uppercase letter"
                  }
                  sx={{
                    "@keyframes shake": {
                      "0%, 100%": { transform: "translateX(0)" },
                      "10%, 30%, 50%, 70%, 90%": {
                        transform: "translateX(-5px)",
                      },
                      "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
                    },
                    "& .Mui-error": {
                      animation: "shake 0.2s",
                    },
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {(error.includes("exists") || error.includes("wrong")) && (
        <Alert severity="error">{error}</Alert>
      )}
    </div>
  );
}
