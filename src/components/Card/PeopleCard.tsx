import React from 'react'
import { IoWalletSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'

export interface IPeopleCard {
    id: number;
    title: string;
    address: string;
    vote: number;
    age: number;
    province_name: string;
    price: string;
    image_url: string;
    description: string;
    pass: string;
    height: string;
    year_of_birth: string;
    images_list: string[];
    province_id: number;
    sortAddress: string;
    code: string;
}


interface IPeopleCardProps {
    data: IPeopleCard
}

export default function PeopleCard({ data }: IPeopleCardProps) {
    return (
        <Link to={ROUTERS_PATHS.DETAILS.replace(':id', data.id.toString())}>
            <div className='bg-white w-full p-2 sm:p-3 rounded-xl flex flex-col lg:gap-2 text-black'>
                <h2 className='line-clamp-1 font-bold'>{data.description}</h2>
                <div className='relative overflow-hidden'>
                    <div className="relative w-full pb-[100%]">
                        <img
                            src={data.image_url}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <h1 className='absolute top-2 left-4 w-fit bg-[#f905e5] font-semibold text-sm text-white inline-block truncate leading-tight'>{data.sortAddress}</h1>
                </div>
                <div className='flex flex-col sm:gap-2'>
                    <div className='flex sm:gap-1 mt-2'>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <img className='w-[20px] sm:w-[34px] aspect-[1/1]' src='https://www.vnphodendo.vip/img/ico-love.e61811a3.png' />
                        ))}
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <img className='w-[16px] sm:w-[26px] aspect-[1/1]' src='https://www.vnphodendo.vip/img/ico-notice.bdf0d3b7.png' />
                        {data.age}
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <img className='w-[16px] sm:w-[26px] aspect-[1/1]' src='https://www.vnphodendo.vip/img/ico-addr.95fc5c8d.png' />
                        {data.province_name}
                    </div>
                    <div className='flex justify-start items-center gap-1'>
                        <div className='w-[16px] sm:w-[26px] aspect-[1/1]'>
                            <IoWalletSharp className='w-full h-full' color={"rgb(255, 0, 255)"} />
                        </div>
                        {data.price}
                    </div>
                </div>
            </div>
        </Link>
    )
}
