import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'
import { IoIosArrowBack } from 'react-icons/io'

export default function SetBank() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.INFO} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    Rút tiền
                </h1>
            </div>
            <div>
                <Link to={ROUTERS_PATHS.BIND_CARD}>
                    <div className="bg-white w-full h-32 flex items-center justify-center">
                        <div className="flex justify-center items-center gap-2">
                            <FaPlus />
                            <p>{`Thêm tài khoản ngân hàng`}</p>
                        </div>
                    </div>
                </Link>
                <p className="p-2 text-gray-500">{`Nhắc nhở: Vui lòng liên kết với ngân hàng thương mại lớn. Nếu cần sửa đổi, vui lòng liên hệ bộ phận chăm sóc khách hàng trực tuyến`}</p>
            </div>
        </section>
    )
}
