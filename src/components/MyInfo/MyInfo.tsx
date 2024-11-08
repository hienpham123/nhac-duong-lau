import React from "react";
import { FiSettings } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { SlWallet } from "react-icons/sl";
import { TfiGame, TfiWallet } from "react-icons/tfi";
import { BiTask } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAnnouncement } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineFilm } from "react-icons/hi";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { useSelector } from "react-redux";

export default function MyInfo() {
    const { currentUser } = useSelector((state: any) => state.currentUser)

    return (
        <div className="relative min-h-screen p-5">
            <div className="fixed top-0 right-0 w-full h-[280px] sm:h-[300px] z-0 overflow-hidden">
                <div
                    className="absolute max-w-[650px] mx-auto inset-0 bg-gradient-to-r from-[#f905e5]/50 to-[#e6c3a1]/50 opacity-100"
                ></div>
                <img
                    className="w-full max-w-[650px] mx-auto h-full object-cover"
                    src="https://api.vnphodendo.com/base/20230727/e8ed34982f517717749d07f76dafa69c.png"
                    alt="Background"
                />
            </div>
            <div className="relative z-10 flex justify-end">
                <Link to="/settings">
                    <FiSettings size={30} color="white" />
                </Link>
            </div>

            <Link to={ROUTERS_PATHS.SETTINGS} state={{ type: "normalInfo" }}>
                <div className="relative z-10 flex items-center gap-2 sm:gap-10 mt-12">
                    <img
                        className="w-[70px] h-[70px] sm:w-[112px] sm:h-[112px] rounded-full"
                        src='https://api.vnphodendo.com/images/head/19.png'
                        alt="Avatar"
                    />
                    <div className='flex flex-col gap-3 sm:gap-7'>
                        <div className="flex gap-4 text-white mt-2">
                            <h5 className="font-medium text-xl sm:text-[32px]">{currentUser.username}</h5>
                            <h6 className="font-semibold text-xl sm:text-3xl inline-block">VIP {currentUser.membership_level}</h6>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                                className="h-full bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full"
                                style={{
                                    width: `${(currentUser.membership_level / 10) * 100}%`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </Link>

            <div className="relative w-full bg-white rounded-xl mt-4 flex py-3 sm:py-8 items-center justify-evenly">
                <Link to={ROUTERS_PATHS.RECHARGE}>
                    <div className="flex items-center gap-4">
                        <TfiWallet size={34} />
                        <span className="font-semibold text-base lg:text-xl">Nạp Tiền</span>
                    </div>
                </Link>
                <div className="h-10 w-[2px] bg-gray-300"></div>
                <Link to={ROUTERS_PATHS.WITH_DRAW}>
                    <div className="flex items-center gap-4">
                        <SlWallet size={34} />
                        <span className="font-semibold text-base lg:text-xl">Rút Tiền</span>
                    </div>
                </Link>
            </div>

            <div className="relative w-full h-[165px] sm:h-[200px] bg-white mt-4 rounded-xl p-4 sm:p-7">
                <Link to={ROUTERS_PATHS.MONEY_LOG}>
                    <div className="flex justify-between">
                        <span className="font-semibold text-base sm:text-xl">Ví của tôi</span>
                        <div className="flex items-center gap-1 font-semibold text-base sm:text-xl">
                            Chi tiết
                            <IoIosArrowForward />
                        </div>
                    </div>
                </Link>
                <div className="h-px w-full bg-gray-300 mt-3"></div>
                <div className="flex items-center justify-between mt-5">
                    <h2
                        style={{ color: "rgb(255, 0, 255)" }}
                        className="font-semibold text-xl sm:text-4xl"
                    >
                        {currentUser.balance ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currentUser.balance) : 0}
                    </h2>
                    <div className="flex items-center font-semibold gap-2">
                        <div className="text-base sm:text-2xl text-gray-400">{`(K VND)`}</div>
                        <IoRefreshCircleOutline size={34} color="rgb(255, 0, 255)" />
                    </div>
                </div>
                <div className="float-end text-base lg:text-2xl mt-4">{`(1K=1000, 1000k=1000000VND)`}</div>
            </div>

            <div className="flex flex-col gap-5 mt-4 p-7 rounded-xl bg-white relative z-10">
                <div className="flex justify-center gap-10 lg:gap-20 w-full">
                    <Link to={ROUTERS_PATHS.PERSONAL_REPORT}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <BiTask
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Thông tin tài khoản
                            </span>
                        </div>
                    </Link>
                    <Link to={ROUTERS_PATHS.MONEY_LOG}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <CiCreditCard1
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Thông tin tài khoản
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-center gap-10 lg:gap-20 w-full">
                    <Link to={ROUTERS_PATHS.HISTORY_VOTE}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <TfiGame
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Lịch sử bình chọn
                            </span>
                        </div>
                    </Link>
                    <Link to={ROUTERS_PATHS.SETTINGS} state={{ type: "normalInfo" }}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <LuUser2
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Thông tin cơ bản
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-center gap-10 lg:gap-20 w-full">
                    <Link to={ROUTERS_PATHS.SYSTEM_NOTIFICATION}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <MdOutlineAnnouncement
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Thông báo
                            </span>
                        </div>
                    </Link>
                    <Link to={ROUTERS_PATHS.SERVICE_ONLINE}>
                        <div className="flex flex-col items-center gap-2 w-32">
                            <HiOutlineFilm
                                size={30}
                                className="outline outline-offset-4 outline-2 rounded-full"
                            />
                            <span className="font-semibold text-center text-base lg:text-xl">
                                Phim của tôi
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
