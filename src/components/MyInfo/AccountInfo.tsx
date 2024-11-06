import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'

export default function AccountInfo() {
    return (
        <section className='relative w-full min-h-screen'>
            <Link to={ROUTERS_PATHS.INFO}>
            <div className="absolute left-3 top-3">
                <IoIosArrowBack size={30} color="white" />
            </div>
            </Link>
            <div className="flex items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center p-3">
                <div className='flex flex-col justify-center items-center gap-5'>
                    <h1 className="text-xl text-white text-center">Thông tin tài khoản</h1>
                    <h1 className='text-md text-white font-bold'>{`Số lượng nhiện vụ(K)`}</h1>
                    <h1 className='text-white text-2xl'>{`0,00K`}</h1>
                    <p className='text-white'>{`Công thức tính lợi nhuận: số tiền thắng - số tiền nhiệm vụ`}</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-y-10 mt-5 p-5'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-red-500 text-xl'>{`0K`}</h1>
                    <p className='text-gray-500 text-md'>{`Số lượng nhiệm vụ`}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-red-500 text-xl'>{`0K`}</h1>
                    <p className='text-gray-500 ext-md'>{`Số tiền nạp`}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-red-500 text-xl'>{`0K`}</h1>
                    <p className='text-gray-500 ext-md'>{`Số tiền rút`}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-red-500 text-xl'>{`0K`}</h1>
                    <p className='text-gray-500 ext-md'>{`Số tiền chiến thắng`}</p>
                </div>
            </div>
        </section>
    )
}