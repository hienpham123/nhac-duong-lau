import React from 'react'
import { FaHome, FaYoutube, FaUser } from 'react-icons/fa';
import { GiVote } from "react-icons/gi";
import { Link } from 'react-router-dom';
import ROUTERS_PATHS from '../../../shared/constants/router-path';

export default function SideBar() {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50 max-w-[650px] mx-auto">
      <div className="flex justify-around items-center py-2">
        <Link to={ROUTERS_PATHS.HOME}>
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaHome size={24} />
            <span className="text-xs">Trang chủ</span>
          </button>
        </Link>

        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
          <GiVote size={24} />
          <span className="text-xs">Bình chọn</span>
        </button>

        <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
          <FaYoutube size={24} />
          <span className="text-xs">Xem phim</span>
        </button>

        <Link to={ROUTERS_PATHS.INFO}>
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500 focus:text-blue-500">
            <FaUser size={24} />
            <span className="text-xs">Của tôi</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
