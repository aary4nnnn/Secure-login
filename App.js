import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./mainCode/index"; 
import Register from "./mainCode/register"; 
import Home from "./mainCode/Home";
import Update from "./mainCode/UpdateUser";
import Create from "./mainCode/CreateUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/Home" element={<Home/>}/>
        <Route path="/update/:id" element={<Update />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    </Router>
  );
}

export default App;
