import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './contents/jsfiles/login';
import MainPage from './contents/jsfiles/main';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/main' element={<MainPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
