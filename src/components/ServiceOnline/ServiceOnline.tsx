import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";

export default function ServiceOnline() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.INFO} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    Phim của tôi
                </h1>
            </div>
            <div className='p-3'>

                <div className='bg-white rounded-lg p-5'>
                    <div className="flex justify-between items-center">
                        <img className='w-10 h-10 sm:h-20 sm:w-20' src="https://www.vnphodendo.com/img/mine/kefu.png" alt="" />
                        <h1 className="text-xl sm:text-3xl font-black">NHẠC DƯƠNG LẦU</h1>
                        <button className='text-sm sm:text-2xl px-4 py-1 text-white bg-[linear-gradient(270deg,#e6c3a1,#f905e5)] rounded-[20px]'>Kết nối</button>
                    </div>
                    <h3 className="mt-2 px-2 text-sm sm:text-2xl w-fit mx-auto text-center bg-gray-200 p-1 rounded-xl">7 * 24 giờ một ngày để phục vụ bạn tận tình</h3>
                </div>
            </div>
        </section>
    )
}
