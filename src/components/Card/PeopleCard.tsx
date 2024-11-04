import React from 'react'
import { AiFillNotification } from 'react-icons/ai'
import { FaHeart } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'

export default function PeopleCard() {
    return (
        <div className='bg-white w-fit p-3 rounded-lg flex flex-col gap-2'>
            <h2 className='line-clamp-1 font-bold'>Lorem Ipsum is simply dummy text</h2>
            <img src="https://ispacedanang.edu.vn/wp-content/uploads/2024/05/hinh-anh-dep-ve-hoc-sinh-cap-3-1.jpg" alt="" />
            <div className='flex gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <FaHeart key={index} size={24} color={'rgb(255, 0, 255)'} />
                ))}
            </div>
            <div className='flex justify-start items-center gap-2'>
                <AiFillNotification size={22} color={'rgb(255, 0, 255)'} />
                {`20`}
            </div>
            <div className='flex justify-start items-center gap-2'>
                <TiLocation size={24} color={'rgb(255, 0, 255)'} />
                {`Phu Nhuan`}
            </div>
            <div className='flex justify-start items-center gap-2'>
                <IoWalletSharp size={20} color={'rgb(255, 0, 255)'}/>
                {`1tr5 - 10tr`}
            </div>
        </div>
    )
}
