import React, { useState } from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Settings() {
    const { currentUser } = useSelector((state: any) => state.currentUser);
    const navigate = useNavigate();
    const { logout } = useAuth();
    const location = useLocation();
    const { type } = location.state || {};
    const [isOpen, setIsOpen] = React.useState({
        settings: type ? false : true,
        information: type === "normalInfo" ? true : false,
        trueName: false,
        gender: false,
        bankCard: false,
        passWordLogin: false,
        passWordPay: false,
        language: false,
    });

    const [name, setName] = React.useState(currentUser.first_name ? currentUser.first_name : '');

    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const [avatar, setAvatar] = useState(`https://api.vnphodendo.com/images/head/19.png`)

    const toggleVisibility = () => {
        setIsVisibleModal(!isVisibleModal);
    };
    const handleLogout = () => {
        logout();
    };

    const handleOpen = (key) => {
        setIsOpen({
            information: false,
            settings: false,
            trueName: false,
            gender: false,
            bankCard: false,
            passWordLogin: false,
            passWordPay: false,
            language: false,
            [key]: true,
        });
    };

    const handleBack = () => {
        const backActions = {
            settings: () => navigate("/info"),
            information: () => type === "normalInfo" ? navigate("/info") : handleOpen("settings"),
            trueName: () => handleOpen("information"),
            gender: () => handleOpen("information"),
            bankCard: () => handleOpen("information"),
            passWordLogin: () => handleOpen("settings"),
            passWordPay: () => handleOpen("settings"),
            language: () => handleOpen("settings"),
        };

        Object.keys(isOpen).forEach((key) => isOpen[key] && backActions[key]());
    };

    const handleSaveName = () => { };

    return (
        <section className="relative w-full min-h-screen">
            <div className="flex h-12 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <div onClick={() => handleBack()} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </div>
                <h1 className="text-xl text-white text-center">Cài đặt</h1>
                {isOpen.trueName && (
                    <div className="absolute right-3">
                        <h3 className="text-white" onClick={handleSaveName}>
                            Lưu
                        </h3>
                    </div>
                )}
            </div>

            {isOpen.settings && (
                <div className="flex flex-col justify-between gap-10">
                    <div className="bg-white flex flex-col gap-4">
                        <div
                            className="flex justify-between border-b border-gray-300 p-3 sm:p-4 cursor-pointer"
                            onClick={() => handleOpen("information")}
                        >
                            <h1 className="font-semibold text-base sm:text-2xl">Thông tin cơ bản</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                            onClick={() => handleOpen("passWordLogin")}
                        >
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu đăng nhập</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                            onClick={() => handleOpen("passWordPay")}
                        >
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu rút tiền</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                            onClick={() => handleOpen("language")}
                        >
                            <h1 className="font-semibold text-base sm:text-2xl">Lựa chọn ngôn ngữ</h1>
                            <MdNavigateNext size={24} />
                        </div>
                    </div>

                    <div
                        className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full p-2 sm:p-4"
                        onClick={handleLogout}
                    >
                        <h1 className="text-xl sm:text-2xl text-white text-center">Đăng xuất</h1>
                    </div>
                </div>
            )}

            {isOpen.information && (
                <div className="bg-white flex flex-col gap-4">
                    <div
                        className="flex justify-between border-b border-gray-300 px-2 py-2 sm:px-4 items-center cursor-pointer"
                        onClick={toggleVisibility}
                    >
                        <h1 className="font-semibold text-base sm:text-2xl">Hình đại diện</h1>
                        <div className="flex items-center">
                            <img
                                className="w-[46px] h-[46px] sm:w-[91px] sm:h-[91px] rounded-full border-4 border-white"
                                src={avatar}
                                alt="Avatar"
                            />
                            <MdNavigateNext size={24} />
                        </div>
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                        onClick={() => handleOpen("trueName")}
                    >
                        <h1 className="font-semibold text-base sm:text-2xl">Tên thật</h1>
                        <div className="flex items-center gap-2">
                            <h1 className='text-base sm:text-2xl'>{name ? name : "Không được thiết lập"}</h1>
                            <MdNavigateNext size={24} />
                        </div>
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                        onClick={() => handleOpen("gender")}
                    >
                        <h1 className="font-semibold text-base sm:text-2xl">Giới tính</h1>
                        <MdNavigateNext size={24} />
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-3 px-2 sm:p-4 cursor-pointer"
                        onClick={() => handleOpen("bankCard")}
                    >
                        <h1 className="font-semibold text-base sm:text-2xl">Liên kết thông tin thẻ ngân hàng</h1>
                        <MdNavigateNext size={24} />
                    </div>
                </div>
            )}

            {isOpen.trueName && (
                <div>
                    <div className="bg-white flex flex-col gap-4">
                        <div className="flex justify-between items-center p-3 px-2 sm:p-4">
                            <h1 className="font-semibold">Tên</h1>
                            <input
                                value={name ? name : ""}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập tên thật của bạn"
                            />
                        </div>
                    </div>
                    <p className="text-red-500 p-2">{`Để đảm bảo an toàn cho tài khoản của bạn, tên thật cần phải nhất quán với tên trên thẻ ngân hàng bị ràng buộc`}</p>
                </div>
            )}

            {isOpen.gender && (
                <div className="bg-white flex flex-col">
                    <div className="border-b border-gray-300 p-3 sm:p-4">
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor="male" className="ml-3 text-xl">
                            Nam giới
                        </label>
                    </div>
                    <div className="p-3 sm:p-4">
                        <input type="radio" name="gender" id="female" />
                        <label htmlFor="female" className="ml-3 text-xl">
                            Nữ giới
                        </label>
                    </div>
                </div>
            )}

            {isOpen.bankCard && (
                <div>
                    <div className="bg-white w-full h-32 flex items-center justify-center">
                        <div className="flex justify-center items-center gap-2">
                            <FaPlus />
                            <p>{`Thêm tài khoản ngân hàng`}</p>
                        </div>
                    </div>
                    <p className="p-2 text-gray-500">{`Nhắc nhở: Vui lòng liên kết với ngân hàng thương mại lớn. Nếu cần sửa đổi, vui lòng liên hệ bộ phận chăm sóc khách hàng trực tuyến`}</p>
                </div>
            )}

            {isOpen.passWordLogin && (
                <div className="flex flex-col gap-5">
                    <div className="bg-white flex flex-col gap-2">
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu cũ</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu cũ của bạn"
                            />
                        </div>
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu mới của bạn"
                            />
                        </div>
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập lại mật khẩu mới"
                            />
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full p-2 sm:p-4">
                        <h1 className="text-xl sm:text-2xl text-white text-center">Xác nhận</h1>
                    </div>
                </div>
            )}

            {isOpen.passWordPay && (
                <div className="flex flex-col gap-5">
                    <div className="bg-white flex flex-col gap-0">
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu rút tiền hiện tại</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu rút tiền hiện tại"
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold text-base sm:text-2xl">Mật khẩu rút tiền mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu rút tiền mới"
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold text-base sm:text-2xl">Nhập lại mật khẩu rút tiền mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập lại mật khẩu rút tiền mới"
                            />
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] rounded-full p-2 sm:p-4">
                        <h1 className="text-xl sm:text-2xl text-white text-center">Xác nhận</h1>
                    </div>
                </div>
            )}

            {isOpen.language && (
                <div className="bg-white p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-red-600 h-10 w-10 p-2 rounded-full flex items-center justify-center">
                            <FaStar color="yellow" size={16} />
                        </div>
                        <p className="text-lg font-semibold">{`Việt Nam`}</p>
                    </div>
                    <TiTick size={20} />
                </div>
            )}

            {isVisibleModal && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 max-w-[650px] mx-auto"
                    onClick={toggleVisibility}
                ></div>
            )}

            <div
                className={`fixed rounded-lg max-w-[650px] mx-auto right-0 left-0 bottom-0 w-full bg-white z-50 transition-transform duration-500 ${isVisibleModal ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                <div className="flex items-center justify-between py-1 px-2 sm:py-3">
                    <IoMdClose className="cursor-pointer" onClick={toggleVisibility} />
                    <h1>Chọn hình đại diện</h1>
                    <h1 className="cursor-pointer"  onClick={toggleVisibility}>Xác nhận</h1>
                </div>
                <div className='h-[1px] bg-gray-400 w-full'></div>
                <div className="grid grid-cols-5 sm:grid-cols-4 gap-2 p-4 mt-2 max-h-[400px] overflow-auto">
                    {Array.from({ length: 20 }, (_, index) => ({
                        id: index + 1,
                        url: `https://api.vnphodendo.com/images/head/${index + 1}.png`
                    })).map(({ id, url }, index) => (
                        <img
                            onClick={() => setAvatar(url)}
                            key={id}
                            className="w-[56px] h-[56px] sm:w-[91px] sm:h-[91px] object-cover rounded-full border-4 border-white"
                            src={url}
                            alt={`Avatar ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
