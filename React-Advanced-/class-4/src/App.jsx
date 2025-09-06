import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; // Make sure the path is correct
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className=''>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
