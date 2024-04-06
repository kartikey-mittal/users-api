import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Home";

import List from "./List";
const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/l" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;