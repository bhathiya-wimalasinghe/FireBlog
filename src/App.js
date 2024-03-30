import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
