import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function About() {
  return <h2>Giới Thiệu</h2>;
}

function App() {
  return (
    <div className='container_body'>
      <SideBar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
