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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AuthorPage from "./pages/AuthorPage";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <TopBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:postId" element={<SinglePost />} />
          <Route path="/articles" element={<Posts />} />
          <Route path="/authorName" element={<AuthorPage />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/edit/:postId" element={<Write isEdit={true} />} />
          <Route path="/profile" element={user ? <Profile /> : <SignIn />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/write"
            element={user ? <Write isEdit={false} /> : <SignIn />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
