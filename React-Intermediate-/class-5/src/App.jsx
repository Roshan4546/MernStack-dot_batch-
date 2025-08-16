import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div>
      <Navbar isLoggedin={isLoggedin} setLoggedin={setLoggedin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        <Route path="/signup" element={<Signup setLoggedin={setLoggedin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
