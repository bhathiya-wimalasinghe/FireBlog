import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "@mui/material";

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!emailRegex.test(email)) {
      setTimeout(() => {
        setError("email");
      }, 10);
      return;
    }

    if (!password) {
      setTimeout(() => {
        setError("password");
      }, 10);
      return;
    }

    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");
    } catch (err) {
      if (err.message.includes("invalid-credential")) {
        setError("Invalid password or email");
      } else {
        setError("Something went wrong. Please try agian later");
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              error={error === "email"}
              helperText={error === "email" && "Enter valid email"}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              error={error === "password"}
              helperText={error === "password" && "Enter password"}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      {error.includes("Invalid") && <Alert severity="error">{error}</Alert>}
    </div>
  );
}
