import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";

export default function Profile() {
    const location = useLocation();
    const { data } = location.state || {};

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
        <section className="w-full h-full min-h-screen pb-10">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link
                    to={ROUTERS_PATHS.CHOOSEN_PROVINCE.replace(
                        ":province",
                        data.province_id.toString()
                    )}
                    className="absolute left-3"
                >
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">{`Chọn người tình`}</h1>
            </div>
            <h3 className="text-center mt-3 font-semibold">{data.code}</h3>
            <div className="grid grid-cols-1 gap-2 rounded-lg p-2">
                {(data ? data.images_list : []).map((image, index) => {
                    return (
                        <div key={index} className="p-2">
                            <img className='w-full h-full object-cover' src={image} alt='...loading' />
                        </div>
                    );
                })}
            </div>

            <h1
                style={{
                    background:
                        "linear-gradient(to right, rgb(127, 87, 120), rgb(229, 194, 160))",
                }}
                className="w-max mx-auto text-base text-white text-center rounded-3xl px-3 py-2"
                onClick={() => setShowNoti(true)}
            >
                Liên hệ với em ngay!
            </h1>

            {showNofi && (
                <div
                    className={`fixed min-w-[300px] text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-black bg-opacity-50 text-white text-lg font-semibold 
                    transition-opacity duration-500 rounded-lg px-4 py-2 ${fadeOut ? "opacity-0" : "opacity-100"
                        }`}
                >
                    Vui lòng liên hệ nhân viên tư vấn hoặc lễ tân
                </div>
            )}
        </section>
    );
}
