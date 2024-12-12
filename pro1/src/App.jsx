import React from 'react';
import Login from './pages/login-signup/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/login-signup/Signup';
import HomePage from './pages/HomePage/HomePage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path ="/HomePage" element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}; 

export default App;