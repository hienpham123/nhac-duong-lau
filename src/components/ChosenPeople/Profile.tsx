import React from "react";
import { Link, useLocation } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";

export default function Profile() {
    const location = useLocation();
    const { data } = location.state || {};
    return (
        <section className="w-full h-full min-h-screen">
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
                {(data ? data.images_list : []).map((image) => {
                    return (
                        <div className="p-2">
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
            >
                Liên hệ với em ngay!
            </h1>
        </section>
    );
}
