import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack, IoMdInformationCircleOutline } from "react-icons/io";

const Withdraw = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef<any>(null);

    const [money, setMoney] = useState("");
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

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <section className="w-full min-h-screen">
            <div className="flex flex-col items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center px-3 py-5 gap-5">
                <div className="flex items-center justify-center relative w-full">
                    <Link to={ROUTERS_PATHS.INFO} className="absolute left-0">
                        <IoIosArrowBack size={30} color="white" />
                    </Link>

                    <h1 className="text-lg sm:text-3xl font-semibold text-white tracking-tight">
                        Trung tâm rút tiền
                    </h1>

                    <button className="absolute right-0 text-base text-white sm:text-2xl tracking-tight">
                        Hồ sơ rút tiền
                    </button>
                </div>
            </div>

            <div className="p-3 bg-white">
                <h1 className="text-base sm:text-2xl font-bold text-black py-3">Số tiền rút (K)</h1>
                <div className="flex justify-between items-center border-b border-gray-200">
                    <input
                        type="text"
                        placeholder=""
                        onChange={(e) => setMoney(e.target.value)}
                        className="border-none text-black outline-none pb-2 sm:py-4 text-lg sm:text-4xl"
                    />
                    <h1 className="text-base sm:text-2xl text-red-500 font-semibold">Tất cả</h1>
                </div>
                <div className="border-b border-gray-200">
                    <input
                        type="text"
                        placeholder="Vui lòng nhập lại mật khẩu rút tiền mới"
                        className="border-none outline-none py-5 w-full"
                    />
                </div>
                <div className="relative flex items-center gap-2 text-base sm:text-2xl font-semibold justify-end mt-3">
                    <IoMdInformationCircleOutline
                        size={28}
                        className="mb-1 cursor-pointer"
                        onClick={togglePopup}
                    />
                    <h1>Mô tả hạn mức</h1>
                    {isPopupOpen && (
                        <div
                            ref={popupRef}
                            className="absolute top-full right-0 bg-white p-4 rounded-md shadow-lg w-80 z-10 border border-gray-200
                     transition-opacity duration-300 opacity-100 transform scale-100"
                            style={{
                                opacity: isPopupOpen ? 1 : 0,
                                transform: isPopupOpen ? "scale(1)" : "scale(0.95)",
                            }}
                        >
                            <h2 className="text-lg font-semibold mb-3">Thông tin hạn mức</h2>
                            <ul className="text-sm text-gray-700 space-y-2">
                                <li>
                                    <strong>1. Giới hạn rút:</strong> Thấp nhất 10K VNĐ - Cao nhất
                                    1,000,000,000 VNĐ
                                </li>
                                <li>
                                    <strong>2. Số lần rút tiền:</strong> Số lần rút tiền cao nhất
                                    trong ngày là 50 lần
                                </li>
                                <li>
                                    <strong>3. Thời gian tiền về tài khoản:</strong> Trung bình 2
                                    đến 5 phút
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="text-lg sm:text-2xl font-semibold">VND：<span className='text-red-500'>0K</span></div>
            </div>
            <div
                className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full p-2 sm:p-4 mt-5 cursor-pointer"
                onClick={() => {
                    if (!money || !!Number.isNaN(Number(money))) {
                        setShowNoti(true);
                    } else {
                        // Navigate to bank transfer page with amount
                        // Example: navigate(ROUTERS_PATHS.BANK_TRANSFER, { state: { amount: money } })
                    }
                }}
            >
                <h1 className="font-semibold text-base sm:text-2xl text-white text-center">Rút tiền ngay lập tức</h1>
            </div>

            {showNofi && (
                <div
                    className={`fixed min-w-[300px] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black bg-opacity-80 text-white text-lg sm:text-2xl font-semibold 
                    transition-opacity duration-500 rounded-lg px-4 py-2 sm:py-5 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    Vui lòng điền số tiền chính xác
                </div>
            )}
        </section>
    );
};
export default Withdraw;
