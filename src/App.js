import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Outlet  } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from "./Components/Home";
import About from './Components/About';
import Work from './Components/Work';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function LayoutWithoutFooter() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet /> {/* Renders the matched child route */}
      </AnimatePresence>
    </>
  );
}

function LayoutWithFooter() {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet /> {/* Renders the matched child route */}
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Route with no footer */}
        <Route path="/" element={<LayoutWithoutFooter />}>
          <Route index element={<Home />} />
        </Route>
        {/* Routes with footer */}
        <Route element={<LayoutWithFooter />}>
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;