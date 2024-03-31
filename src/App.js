import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Authors from "./pages/Authors";

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      <Authors />
      <Footer />
    </div>
  );
}

export default App;
