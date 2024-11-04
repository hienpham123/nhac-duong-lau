import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import MyInfo from './components/MyInfo/MyInfo';


function App() {
  return (
    <div className='container_body'>
      <SideBar/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/info" element={ <MyInfo /> } />
      </Routes>
    </div>
  );
}

export default App;
