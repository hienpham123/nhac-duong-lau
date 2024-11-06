import React from 'react'
import { Link } from 'react-router-dom';
import ROUTERS_PATHS from '../../../shared/constants/router-path';

export default function SideBar() {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50 max-w-[650px] mx-auto">
      <div className="relative flex justify-around items-center py-2">
        <Link to={ROUTERS_PATHS.HOME}>
          <button className="flex flex-col items-center text-gray-600 hover:text-[#f905e5] focus:text-[#f905e5]">
            <img className='w-[3.2rem] h-[3.2rem]' src="https://www.vnphodendo.com/img/footer/index.jpg?d=1730873610692" alt="" />
            <span className="text-xs">Trang chủ</span>
          </button>
        </Link>

        <button className="flex flex-col items-center text-gray-600 hover:text-[#f905e5] focus:text-[#f905e5]">
        <img className='w-[3.2rem] h-[3.2rem]' src="https://www.vnphodendo.com/img/footer/subscribe2.jpg?d=1730873610692" alt="" />
          <span className="text-xs">Bình chọn</span>
        </button>

        <Link to={ROUTERS_PATHS.CHOSEN_PEOPELE}>
            <img className='w-[4rem] h-[4rem] absolute object-cover bottom-9 -translate-x-1/2' src="https://www.vnphodendo.com/img/footer/beauty3.png?d=1730873610692" alt="" />
        </Link>

        <button className="flex flex-col items-center text-gray-600 hover:text-[#f905e5] focus:text-[#f905e5]">
        <img className='w-[3.2rem] h-[3.2rem]' src="https://www.vnphodendo.com/img/footer/video.jpg?d=1730873610692" alt="" />

          <span className="text-xs">Xem phim</span>
        </button>

        <Link to={ROUTERS_PATHS.INFO}>
          <button className="flex flex-col items-center text-gray-600 hover:text-[#f905e5] focus:text-[#f905e5]">
          <img className='w-[3.2rem] h-[3.2rem]' src="https://www.vnphodendo.com/img/footer/my.jpg?d=1730873610692" alt="" />
            <span className="text-xs">Của tôi</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
