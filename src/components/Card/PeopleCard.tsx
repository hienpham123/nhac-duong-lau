import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoWalletSharp } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'
import { HiSpeakerphone } from 'react-icons/hi'

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
    code: string;
}


interface IPeopleCardProps {
    data: IPeopleCard
}

export default function PeopleCard({ data }: IPeopleCardProps) {

    return (
        <Link to={ROUTERS_PATHS.DETAILS.replace(':id', data.id.toString())}>
            <div className='bg-white w-full p-3 rounded-lg flex flex-col gap-1 lg:gap-2'>
                <h2 className='line-clamp-1 font-bold'>{data.description}</h2>
                <div className='relative overflow-hidden'>
                    <div className="relative w-full pb-[100%]">
                        <img
                            src={data.image_url}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <h1 className='absolute top-2 left-4 w-full bg-[#f905e5] font-semibold text-sm text-white inline-block truncate leading-tight'>{data.address}</h1>
                </div>
                <div className='flex gap-1'>
                    {Array.from({ length: data.vote }).map((_, index) => (
                        <FaHeart key={index} size={20} color={'rgb(255, 0, 255)'} />
                    ))}
                </div>
                <div className='flex justify-start items-center gap-1'>
                    <HiSpeakerphone size={20} color={'rgb(255, 0, 255)'} />
                    {data.age}
                </div>
                <div className='flex justify-start items-center gap-1'>
                    <TiLocation size={20} color={'rgb(255, 0, 255)'} />
                    {data.province_name}
                </div>
                <div className='flex justify-start items-center gap-1'>
                    <IoWalletSharp size={18} color={'rgb(255, 0, 255)'} />
                    {data.price}
                </div>
            </div>
        </Link>
    )
}
