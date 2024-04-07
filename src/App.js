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

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (user) =>
      user ? setUser(user) : setUser(null)
    );

    return () => unsbscribe();
  }, []);

  return (
    <div>
      <Router>
        <ScrollToTop />
        <TopBar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/authorName" element={<AuthorPage />} />
          <Route path="/write" element={user ? <Write /> : <SignIn />} />
          <Route path="/articles" element={<Posts />} />
          <Route path="/profile" element={user ? <Profile /> : <SignIn />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/singlepost" element={<SinglePost />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
