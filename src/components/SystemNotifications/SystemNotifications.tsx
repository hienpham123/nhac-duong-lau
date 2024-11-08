import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";

export default function SystemNotifications() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.INFO} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    Thông báo hệ thống
                </h1>
            </div>
        </section>
    );
}
