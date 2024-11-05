import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'
import { HiSpeakerphone } from 'react-icons/hi'

export default function PeopleCard() {
    return (
        <Link to={ROUTERS_PATHS.DETAILS.replace(':id', '1')}>
        <div className='bg-white w-fit p-3 rounded-lg flex flex-col gap-1'>
            <h2 className='line-clamp-1 font-bold'>Lorem Ipsum is simply dummy text</h2>
            <div className='relative overflow-hidden'>
                <img src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg" alt="" />
                <h1 className='absolute top-2 left-4 w-full bg-pink-500 text-sm text-white inline-block truncate leading-tight'>{`Phan Đình Phùng, Phú Nhuận`}</h1>
            </div>
            <div className='flex gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <FaHeart key={index} size={20} color={'rgb(255, 0, 255)'} />
                ))}
            </div>
            <div className='flex justify-start items-center gap-1'>
                <HiSpeakerphone size={20} color={'rgb(255, 0, 255)'} />
                {`20`}
            </div>
            <div className='flex justify-start items-center gap-1'>
                <TiLocation size={20} color={'rgb(255, 0, 255)'} />
                {`Phu Nhuan`}
            </div>
            <div className='flex justify-start items-center gap-1'>
                <IoWalletSharp size={18} color={'rgb(255, 0, 255)'} />
                {`1tr5 - 10tr`}
            </div>
        </div>
        </Link>
    )
}
