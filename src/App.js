import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home"; 
import Read from "./components/Read/Read";
import UserProvider from "./components/UserContext/UserContext";
import Delete from './components/Delete/Delete'
import Edit from "./components/Edit/Edit";
import Create from "./components/Create/Create";
export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/Delete/:id" element={<Delete />} />
          <Route path="/Read/:id" element={<Read />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Create" element={<Create/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

