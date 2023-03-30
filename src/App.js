import React from "react";
import "./index.css"
import Home from "./routes/Home"
import Gallery from "./routes/Gallery"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Capstone from './routes/Capstone'

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      {/* Adds the routing path to the website to different pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="capstone" element={<Capstone />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
