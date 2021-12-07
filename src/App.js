import './App.css'
import React from 'react';
import Navbar from './app/shared/Navbar/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Store from './app/Store/Store';

export default function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar></Navbar>
        </header>
        <Routes>
          <Route path="/store" element={<Store/>} />
        </Routes>
      </div>
    </Router>
  );
}