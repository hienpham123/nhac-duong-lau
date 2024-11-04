import React from 'react'
import { FaHome, FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50 max-w-[700px] mx-auto">
      <div className="flex justify-around items-center py-2">
        {/* Home Button */}
        <Link to="/">
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaHome size={24} />
            <span className="text-xs">Trang chủ</span>
          </button>
        </Link>

        {/* Search Button */}
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
          <FaSearch size={24} />
          <span className="text-xs">Search</span>
        </button>

        {/* Notifications Button */}
        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
          <FaBell size={24} />
          <span className="text-xs">Notifications</span>
        </button>

        {/* Profile Button */}
        <Link to="/info">
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaUser size={24} />
            <span className="text-xs">Của tôi</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
