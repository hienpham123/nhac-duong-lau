import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
import ROUTERS_PATHS from '../../shared/constants/router-path'
import { vietnamBanks } from '../../shared/constants/banks';

export default function BindCard() {
    const location = useLocation();
    const { type } = location.state || {};

    const [isVisible, setIsVisible] = useState(false);
    const [bank, setBank] = useState('')
    const [name, setName] = useState('')

    const openModal = () => setIsVisible(true);
    const closeModal = () => setIsVisible(false);

    const [showNofi, setShowNoti] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (showNofi) {
            setTimeout(() => {
                setFadeOut(true);
            }, 1500);

            setTimeout(() => {
                setShowNoti(false);
                setFadeOut(false);
            }, 2000);
        }
    }, [showNofi]);

    return (
        <section className="w-full min-h-screen relative">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link state={{ type: type }} to={ROUTERS_PATHS.SET_BANK} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center truncate">
                    Liên kết số tài khoản ngân hàng
                </h1>
            </div>

            <div>
                <h1 className='text-center text-gray-500 mt-2 sm:mt-5 text-base sm:text-3xl'>Vui lòng điền số tài khoản của bạn để rút tiền</h1>

                <div className="bg-white mt-3 flex flex-col gap-2">
                    <div className="flex px-2 py-3 sm:py-8 gap-4 border-b border-gray-200 last:border-b-0">
                        <h1 className="min-w-32 sm:min-w-40 text-base sm:text-2xl">Tên ngân hàng</h1>
                        <button onClick={openModal} className="text-gray-400 text-base sm:text-2xl">{bank ? bank : `Vui lòng chọn một ngân hàng`}</button>
                    </div>
                    <div className="flex px-2 py-3 sm:py-8 gap-4 border-b border-gray-200 last:border-b-0">
                        <h1 className="min-w-32 sm:min-w-40 text-base sm:text-2xl">Số tài khoản</h1>
                        <input className="text-gray-400 border-none outline-none w-full text-base sm:text-2xl" placeholder="Vui lòng nhập số tài khoản ngân hàng"></input>
                    </div>
                    <div className="flex px-2 py-3 sm:py-8 gap-4 border-b border-gray-200 last:border-b-0">
                        <h1 className="min-w-32 sm:min-w-40 text-base sm:text-2xl">Tên</h1>
                        <input onChange={(e) => setName(e.target.value)} className="text-gray-400 border-none outline-none w-full text-base sm:text-2xl" placeholder="Vui lòng nhập tên thật của bạn"></input>
                    </div>
                    <span className="p-3 text-red-500 text-base sm:text-2xl" style={{ lineHeight: 1.2 }}>
                        Khách hàng thân ái, để bảo vệ sự an toàn cho tài sản của bạn, vui lòng liên kết tên thật và cài đặt mật khẩu rút tiền. Nếu tên không khớp với tên tài khoản, sẽ không thể rút tiền.
                    </span>
                </div>

                <div
                    className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full p-2 sm:p-4 mt-3 cursor-pointer"
                    onClick={() => {
                        if (!name) {
                            setShowNoti(true)
                        }
                    }}
                >
                    <h1 className="text-base sm:text-2xl text-white text-center">Xác nhận liên kết số tài khoản</h1>
                </div>
            </div>
            {isVisible && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={closeModal}
                    ></div>

                    <div className="fixed inset-x-0 bottom-0 max-h-[50%] bg-white rounded-t-lg py-4 z-20 overflow-y-auto transform translate-y-full animate-slide-up">
                        <div className="space-y-4">
                            {vietnamBanks.map((option, index) => (
                                <div
                                    key={index}
                                    className="py-2 px-4 text-center font-semibold border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => {
                                        setBank(option)
                                        closeModal();
                                    }}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {showNofi && (
                <div
                    className={`fixed min-w-[300px] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black bg-opacity-50 text-white text-lg font-semibold 
                    transition-opacity duration-500 rounded-lg px-4 py-2 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    Vui lòng nhập tên thật
                </div>
            )}
        </section>
    )
}
