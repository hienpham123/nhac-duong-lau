import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { IoIosArrowBack } from "react-icons/io";
import PaymentQRCode from "../PaymentQRCode/PaymentQRCode";
import { useLocation } from "react-router-dom";

const BankTransfer = () => {
    const location = useLocation();
    const { amount } = location.state || {};

    const methods = {
        MB: {
            bankCode: 970422,
            accountNumber: 2023032003,
            accountName: "PHAM THE HIEN",
            amount: amount,
            addInfo: "Nap tiền",
        },
    };

    const [method, setMethod] = useState({});

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

            {Object.keys(method).length ? (
                <PaymentQRCode {...method}></PaymentQRCode>
            ) : (
                <div
                    className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] p-2 mt-5"
                    onClick={() => setMethod(methods.MB)}
                >
                    <h1 className="text-center text-white">MB</h1>
                </div>
            )}
        </section>
    );
};
export default BankTransfer;
