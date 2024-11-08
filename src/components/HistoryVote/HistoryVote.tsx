import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";

export default function HistoryVote() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.INFO} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    Lịch sử bình chọn
                </h1>
            </div>

            <div className='mx-auto mt-3'>
                <img className="w-1/2 mx-auto" src="https://img01.yzcdn.cn/vant/empty-image-default.png" alt="" />
                <p className='text-center text-gray-400'>Dữ liệu trống</p>
            </div>
        </section>
    );
}
