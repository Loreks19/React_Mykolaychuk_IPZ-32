import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "10px", background: "#f4f4f4" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/media" style={{ marginRight: "10px" }}>Images and Videos</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;