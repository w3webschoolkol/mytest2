import React from 'react';
import Index from './Homepage/Index';
import LoginPage from './Homepage/LoginPage';
import Navbar from './Homepage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reg from './Homepage/Reg';

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/reg' element={<Reg/>}/>
    
    
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;