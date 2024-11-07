import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Recharge = () => {
    const [showNofi, setShowNoti] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const [money, setMoney] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (showNofi) {
            setTimeout(() => {
                setFadeOut(true);
            }, 1000);

            setTimeout(() => {
                setShowNoti(false);
                setFadeOut(false);
            }, 1000);
        }
    }, [showNofi]);

    return (
        <section className="w-full min-h-screen">
            <div className="flex flex-col items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center px-3 py-5 gap-5">
                <div className="flex items-center justify-center relative w-full">
                    <Link to={ROUTERS_PATHS.INFO} className="absolute left-0">
                        <IoIosArrowBack size={30} color="white" />
                    </Link>

                    <h1 className="text-xl lg:text-3xl text-white">Nạp tiền</h1>

                    <h1 className="absolute right-0 text-base text-white lg:text-2xl">
                        Lịch sử nạp tiền
                    </h1>

                </div>
                <h1 className="text-2xl text-gray-300">Số dư hiện tại (K)</h1>

                <h1 className="text-4xl text-white underline">0K</h1>
            </div>

            <div className="p-3 flex flex-col gap-2">
                <h1 className="text-xl text-gray-400 font-semibold">
                    Vui lòng nhập số tiền nạp
                </h1>
                <input
                    onChange={(e) => setMoney(e.target.value)}
                    type="text"
                    className="w-full p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Vui lòng nhập số tiền nạp"
                />

                <div className="w-5/6 mx-auto bg-blue-600 rounded-3xl p-2 mt-2">
                    <h1
                        className="text-lg text-white text-center"
                        onClick={() => {
                            if (!money) {
                                setShowNoti(true);
                            } else {
                                navigate(ROUTERS_PATHS.BANK_TRANSFER, { state: { amount: money } })
                            }
                        }}
                    >
                        Kế tiếp
                    </h1>
                </div>
            </div>

            <div className="w-full h-[0.5px] bg-slate-500 mt-5"></div>

            {showNofi && (
                <div
                    className={`fixed min-w-[300px] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black bg-opacity-70 text-white text-xl font-semibold 
                    transition-opacity duration-500 rounded-lg px-4 py-3 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    Số tiền sai
                </div>
            )}
        </section>
    );
};
export default Recharge;
