import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from './Pages/Home'; // Adjust the path as needed
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { use } from 'react';
function App() {

  const [isLoggedin, setLoggedin] = useState(false);

  return (
    <div>
      <Navbar isLoggedin = {isLoggedin} setLoggedin = {setLoggedin}></Navbar>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App
