import React from "react";
import './App.css'

import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from "./pages/Register/Register";
import { Area_Pix } from './pages/Area_Pix/Area_Pix'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Sua_Conta from "./pages/Sua_Conta/Sua_Conta";

function App() {
  

  return (
    
    <Router >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/area-pix" element={<Area_Pix />}/>
        <Route path="/account" element={<Sua_Conta />}/>
      </Routes>
    </Router>
  );
}

export default App;
