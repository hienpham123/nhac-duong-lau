import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import MyInfo from './components/MyInfo/MyInfo';
import Settings from './components/MyInfo/Settings';


function App() {
  const location = useLocation();
  return (
    <div className='relative'>
      <div className='container_body'>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/info" element={ <MyInfo /> } />
          <Route path="/settings" element={ <Settings /> } />
        </Routes>
      </div>
      {location.pathname !== '/settings' && <SideBar />}
    </div>
  );
}

export default App;
