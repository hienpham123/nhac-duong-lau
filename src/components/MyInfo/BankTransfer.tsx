import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";

const BankTransfer = () => {

    return (
        <section className="w-full min-h-screen">
            <div className="flex flex-col items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center px-3 py-5 gap-5">
                <div className="flex items-center justify-center relative w-full">
                    <Link to={ROUTERS_PATHS.RECHARGE} className="absolute left-0">
                        <IoIosArrowBack size={30} color="white" />
                    </Link>

                    <h1 className="text-xl lg:text-3xl text-white">Nạp tiền</h1>
                </div>
            </div>
            <div className='w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] p-2 mt-5'>
                <h1 className='text-center text-white'>Zalo</h1>
            </div>
        </section>
    );
};
export default BankTransfer;
