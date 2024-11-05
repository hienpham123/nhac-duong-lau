import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import { IoRefreshCircleOutline } from 'react-icons/io5'
import { SlWallet } from 'react-icons/sl'
import { TfiGame, TfiWallet } from 'react-icons/tfi'
import { BiTask } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineAnnouncement } from 'react-icons/md'
import { LuUser2 } from 'react-icons/lu'
import { HiOutlineFilm } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function MyInfo() {
    return (
        <div className="relative h-fit p-5">
            <div className="absolute top-0 right-0 w-full h-[300px] z-0 overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://luv.vn/wp-content/uploads/2021/12/hinh-anh-gai-mat-vuong-xinh-dep-42.jpg"
                    alt="Background"
                />
            </div>

            <div className="relative z-10 flex justify-end">
                <Link to="/settings">
                    <FiSettings size={30} color="white" />
                </Link>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2 mt-12">
                <img
                    className="w-[80px] h-[80px] rounded-full border-4 border-white"
                    src="https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2021/04/Tong-kho-hinh-nen-gai-xinh-HD-cho-dien-thoai.jpg"
                    alt="Avatar"
                />
                <div className="flex gap-4 text-white mt-2">
                    <h5 className="font-semibold text-2xl">ADMIN</h5>
                    <h6 className="font-semibold text-xl">VIP 1</h6>
                </div>
            </div>

            <div className='relative w-full h-[100px] bg-white rounded-xl mt-4 flex p-5 items-center justify-evenly'>
                <div className='flex items-center gap-4'>
                    <TfiWallet size={34} />
                    <span className='font-semibold text-lg lg:text-xl'>Nạp Tiền</span>
                </div>
                <div className="h-10 w-[2px] bg-gray-300"></div>
                <div className='flex items-center gap-4'>
                    <SlWallet size={34} />
                    <span className='font-semibold text-lg lg:text-xl'>Rút Tiền</span>
                </div>
            </div>

            <div className='relative w-full h-[200px] bg-white mt-4 rounded-xl p-7'>
                <div className='flex justify-between'>
                    <span className='font-semibold text-xl'>Ví của tôi</span>
                    <div className='flex items-center gap-1 font-semibold text-xl'>Chi tiết
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="h-px w-full bg-gray-300 mt-3"></div>
                <div className='flex items-center justify-between mt-5'>
                    <h2 style={{ color: "rgb(255, 0, 255)" }} className='font-semibold text-4xl'>0</h2>
                    <div className='flex items-center font-semibold gap-2'>
                        <div className='text-2xl'>{`(K VND)`}</div>
                        <IoRefreshCircleOutline size={34} color="rgb(255, 0, 255)" />
                    </div>
                </div>
                <div className='float-end text-xl lg:text-2xl mt-4'>{`(1K=1000, 1000k=1000000VND)`}</div>
            </div>

            <div className='flex flex-col gap-5 mt-4 p-7 rounded-xl bg-white'>
                <div className='flex justify-center gap-10 lg:gap-20 w-full'>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <BiTask size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Thông tin tài khoản</span>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <CiCreditCard1 size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Thông tin tài khoản</span>
                    </div>
                </div>

                <div className='flex justify-center gap-10 lg:gap-20 w-full'>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <TfiGame size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Lịch sử bình chọn</span>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <LuUser2 size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Thông tin cơ bản</span>
                    </div>
                </div>

                <div className='flex justify-center gap-10 lg:gap-20 w-full'>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <MdOutlineAnnouncement size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Thông báo</span>
                    </div>
                    <div className='flex flex-col items-center gap-2 w-32'>
                        <HiOutlineFilm size={30} className='outline outline-offset-4 outline-2 rounded-full' />
                        <span className='font-semibold text-center text-lg lg:text-xl'>Phim của tôi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
