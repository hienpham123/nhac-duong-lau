import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';

function About() {
  return <h2>Giới Thiệu</h2>;
}

function App() {
  return (
    <div className='container_body'>
      {/* <nav>
        <Link to="/">Trang Chủ</Link> | <Link to="/about">Giới Thiệu</Link>
      </nav>
      <SideBar/> */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          {/* Home Button */ }
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaHome size={ 24 } />
            <span className="text-xs">Home</span>
          </button>

          {/* Search Button */ }
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaSearch size={ 24 } />
            <span className="text-xs">Search</span>
          </button>

          {/* Notifications Button */ }
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaBell size={ 24 } />
            <span className="text-xs">Notifications</span>
          </button>

          {/* Profile Button */ }
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaUser size={ 24 } />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
