import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Write from "./pages/Write";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SinglePost from "./pages/SinglePost";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <Authors /> */}
      {/* <Write /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <SinglePost /> */}
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
