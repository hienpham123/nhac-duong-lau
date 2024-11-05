import React from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useLocation, useNavigate } from "react-router-dom";

export default function Settings() {
    const navigate = useNavigate();
    const location = useLocation();
    const { type } = location.state || {};
    const [isOpen, setIsOpen] = React.useState({
        settings: type ? false : true,
        information: type === 'normalInfo' ? true : false,
        trueName: false,
        gender: false,
        bankCard: false,
        passWordLogin: false,
        passWordPay: false,
        language: false,
    });

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
        if (isOpen.settings) {
            return navigate("/info");
        } else if (isOpen.information) {
            return handleOpen("settings");
        } else if (isOpen.trueName) {
            return handleOpen("information");
        } else if (isOpen.gender) {
            return handleOpen("information");
        } else if (isOpen.bankCard) {
            return handleOpen("information");
        } else if (isOpen.passWordLogin) {
            return handleOpen("settings");
        } else if (isOpen.passWordPay) {
            return handleOpen("settings");
        } else if (isOpen.language) {
            return handleOpen("settings");
        }
    };

    return (
        <section className="relative w-full min-h-screen">
            <div className="flex h-12 items-center bg-fuchsia-400 justify-center">
                <div onClick={() => handleBack()} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </div>
                <h1 className="text-xl text-white text-center">Cài đặt</h1>
                {isOpen.trueName && (
                    <div className="absolute right-3">
                        <h3 className="text-white">Lưu</h3>
                    </div>
                )}
            </div>

            {isOpen.settings && (
                <div className="flex flex-col justify-between gap-10">
                    <div className="bg-white flex flex-col gap-4">
                        <div
                            className="flex justify-between border-b border-gray-300 pb-2 p-3"
                            onClick={() => handleOpen("information")}
                        >
                            <h1 className="font-semibold">Thông tin cơ bản</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-2 px-3"
                            onClick={() => handleOpen("passWordLogin")}
                        >
                            <h1 className="font-semibold">Mật khẩu đăng nhập</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-2 px-3"
                            onClick={() => handleOpen("passWordPay")}
                        >
                            <h1 className="font-semibold">Mật khẩu rút tiền</h1>
                            <MdNavigateNext size={24} />
                        </div>
                        <div
                            className="flex justify-between border-b border-gray-300 pb-2 px-3"
                            onClick={() => handleOpen("language")}
                        >
                            <h1 className="font-semibold">Lựa chọn ngôn ngữ</h1>
                            <MdNavigateNext size={24} />
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto bg-fuchsia-400 rounded-3xl p-2">
                        <h1 className="text-xl text-white text-center">Đăng xuất</h1>
                    </div>
                </div>
            )}

            {isOpen.information && (
                <div className="bg-white flex flex-col gap-4">
                    <div className="flex justify-between border-b border-gray-300 pb-2 p-3 items-center">
                        <h1 className="font-semibold">Hình đại diện</h1>
                        <div className="flex items-center">
                            <img
                                className="w-[46px] h-[46px] rounded-full border-4 border-white"
                                src="https://allimages.sgp1.digitaloceanspaces.com/photographercomvn/2021/04/Tong-kho-hinh-nen-gai-xinh-HD-cho-dien-thoai.jpg"
                                alt="Avatar"
                            />
                            <MdNavigateNext size={24} />
                        </div>
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-2 px-3"
                        onClick={() => handleOpen("trueName")}
                    >
                        <h1 className="font-semibold">Tên thật</h1>
                        <MdNavigateNext size={24} />
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-2 px-3"
                        onClick={() => handleOpen("gender")}
                    >
                        <h1 className="font-semibold">Giới tính</h1>
                        <MdNavigateNext size={24} />
                    </div>
                    <div
                        className="flex justify-between border-b border-gray-300 pb-2 px-3"
                        onClick={() => handleOpen("bankCard")}
                    >
                        <h1 className="font-semibold">Liên kết thông tin thẻ ngân hàng</h1>
                        <MdNavigateNext size={24} />
                    </div>
                </div>
            )}

            {isOpen.trueName && (
                <div>
                    <div className="bg-white flex flex-col gap-4">
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold">Tên</h1>
                            <input
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
                    <div className="border-b border-gray-300 p-4">
                        <input type="radio" name="gender" id="male" />
                        <label htmlFor="male" className="ml-3 text-xl">
                            Nam giới
                        </label>
                    </div>
                    <div className="p-4">
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
                            <h1 className="font-semibold">Mật khẩu cũ</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu cũ của bạn"
                            />
                        </div>
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold">Mật khẩu mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu mới của bạn"
                            />
                        </div>
                        <div className="flex justify-between items-center p-3">
                            <h1 className="font-semibold">Mật khẩu mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-2/3 ml-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập lại mật khẩu mới"
                            />
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto bg-fuchsia-400 rounded-3xl p-2">
                        <h1 className="text-xl text-white text-center">Xác nhận</h1>
                    </div>
                </div>
            )}

            {isOpen.passWordPay && (
                <div className="flex flex-col gap-5">
                    <div className="bg-white flex flex-col gap-0">
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold">Mật khẩu rút tiền hiện tại</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu rút tiền hiện tại"
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold">Mật khẩu rút tiền mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập mật khẩu rút tiền mới"
                            />
                        </div>
                        <div className="flex flex-col justify-between items-start p-3 gap-2">
                            <h1 className="font-semibold">Nhập lại mật khẩu rút tiền mới</h1>
                            <input
                                type="text"
                                className="float-right border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                                placeholder="Vui lòng nhập lại mật khẩu rút tiền mới"
                            />
                        </div>
                    </div>

                    <div className="w-5/6 mx-auto bg-fuchsia-400 rounded-3xl p-2">
                        <h1 className="text-xl text-white text-center">Xác nhận</h1>
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
        </section>
    );
}
