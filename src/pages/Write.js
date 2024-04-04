import { CloudUpload } from "@mui/icons-material";
import {
  Button,
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");

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
        Write
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        height="350px"
        marginBottom={2}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUpload />}
          sx={{
            width: "100%",
            backgroundColor: "lightgray",
            ":hover": { backgroundColor: "lightcyan" },
            color: "black",
          }}
        >
          Upload Your Image Here
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
          <Button variant="contained" size="large">
            Publish
          </Button>
        </Box>
      </Box>
      <ReactQuill
        placeholder="Tell your story here.."
        modules={modules}
        // formats={formats}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </Container>
  );
}
