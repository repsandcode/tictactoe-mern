// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import GamePage from "./pages/gamePage/index";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}
          <Route path="/" element={<HomePage />} */}
      <GamePage />
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
