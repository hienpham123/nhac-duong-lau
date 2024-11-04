import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { SlWallet } from 'react-icons/sl'
import { TfiWallet } from 'react-icons/tfi'

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
                <FiSettings size={30} color="white" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2 mt-12">
                <img
                    className="w-[80px] h-[80px] rounded-full border-4 border-white"
                    src="https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2021/04/Tong-kho-hinh-nen-gai-xinh-HD-cho-dien-thoai.jpg"
                    alt="Avatar"
                />
                <div className="flex gap-4 text-white mt-2">
                    <h5 className="font-semibold">ADMIN</h5>
                    <h6>VIP 1</h6>
                </div>
            </div>

            <div className='relative w-full h-[100px] bg-white rounded-xl mt-4 flex p-5 items-center justify-evenly'>
                <div className='flex items-center gap-4'>
                    <TfiWallet size={34} />
                    <span className='font-semibold'>Nạp Tiền</span>
                </div>
                <div className="h-10 w-[2px] bg-gray-300"></div>
                <div className='flex items-center gap-4'>
                    <SlWallet size={34} />
                    <span className='font-semibold'>Rút Tiền</span>
                </div>
            </div>
        </div>
    )
}
