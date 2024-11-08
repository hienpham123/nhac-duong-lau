import React, { useState } from "react";
import { Link } from "react-router-dom";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { vietnamProvinces } from "../../shared/constants/provinces";

export default function ChosenPeople() {
    const [activeTab, setActiveTab] = useState("1");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="w-full h-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    Chọn người tình
                </h1>
            </div>
            <div className="w-full rounded-md">
                <div className="sticky top-0 z-50 flex justify-around bg-white h-[56px] lg:h-[80px]">
                    <button
                        className={`text-lg lg:text-2xl font-bold px-4 py-2 transition-colors ${activeTab === "1" ? "text-[#f905e5]" : "text-gray-500"
                            }`}
                        onClick={() => handleTabChange("1")}
                    >
                        Thành phố
                    </button>
                    <button
                        className={`text-lg lg:text-2xl font-bold px-4 py-2 transition-colors ${activeTab === "2" ? "text-[#f905e5]" : "text-gray-500"
                            }`}
                        onClick={() => handleTabChange("2")}
                    >
                        Giá xử lí
                    </button>

                    <div
                        className={`absolute bottom-0 h-[2px] bg-[#f905e5] transition-all duration-300`}
                        style={{
                            width: "23%",
                            left: activeTab === "1" ? "15%" : "65%",
                        }}
                    ></div>
                </div>

                {activeTab === "1" && (
                    <div className="p-4">
                        <div
                            className="bg-[#8a637d] p-2 rounded-lg"
                            style={{ lineHeight: 1 }}
                        >
                            <span className="text-sm text-white">
                                {`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc, Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào, Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}
                            </span>
                        </div>

                        <div className="mt-3">
                            {vietnamProvinces.map((province, index) => (
                                <Link
                                    key={index}
                                    to={ROUTERS_PATHS.CHOOSEN_PROVINCE.replace(
                                        ":province",
                                        province.id.toString()
                                    )}
                                >
                                    <div className="bg-white w-full p-4 border-b border-gray-200">
                                        <h1 className="text-base md:text-2xl font-medium uppercase">
                                            {province.name}
                                        </h1>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "2" && (
                    <div className="p-4 flex flex-col gap-2">
                        <div className="bg-[#8a637d] p-2 rounded-lg">
                            <span className="text-sm text-white">
                                {`Dịch vụ cung cấp gái đẹp miễn phí trên toàn quốc, Có thể sắp xếp bất cứ nơi nào tại Việt Nam và bất cứ lúc nào, Bạn chỉ cần liên hệ lễ tân sẽ lập tức sắp xếp.`}
                            </span>
                        </div>
                        <h3 className="text-[#0bdab0] font-semibold">
                            Có những tài nguyên nào?
                        </h3>
                        <h3 className="font-semibold">
                            {`Người nổi tiếng trên mạng, người mẫu, tiếp viên hàng không, người mẫu trẻ, sinh viên đại học, chỉ có điều bạn không nghĩ ra được và bạn không thể làm được nếu không có nền tảng này`}
                        </h3>
                        <h3 className="text-[#0bdab0] font-semibold">Khu vực phục vụ</h3>
                        <h3 className="font-semibold">
                            {`Các cuộc hẹn miễn phí trong cùng một thành phố, hoặc ở bất kỳ đâu trong cả nước, các thành phố cấp một và cấp hai tại địa phương ở Việt Nam và các thành phố cấp ba cũng có thể được sắp xếp bằng cách liên hệ với nhân viên tiếp tân.`}
                        </h3>
                    </div>
                )}
            </div>
        </section>
    );
}
