import React from "react";
import Home from "./Home";
import About from "./About";
import Calculator from "./Calculator";
import Media from "./Media";
//import Media from "./pages/Media";
import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <nav style={{ padding: "10px", background: "#f4f4f4" }}>
          <Link to="/" className="nav-item">Homepage</Link>
          <Link to="/about" className="nav-item">About me</Link>
          <Link to="/media" className="nav-item">Media</Link>
          <Link to="/calculator" className="nav-item">Calculator</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>

  );
}

export default App;