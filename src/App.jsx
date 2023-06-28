import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Params from "./components/Params";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:word" element={<Params />} />
          <Route path="/:word/:color/:bgCol" element={<Params />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
