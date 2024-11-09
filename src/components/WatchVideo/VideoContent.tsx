import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { videos_list } from "../../../mock/video-list";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import Video from "./Video";
import { IoClose } from "react-icons/io5";

const VideoContent = ({ url }) => {
    const { id: idVideo } = useParams();
    const [data, setData] = useState<any>();
    const [otherVideo, setOtherVideo] = useState<any>([]);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isFading, setIsFading] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const data = videos_list.find(
            (item) => idVideo && item.id === Number(idVideo)
        );
        const otherVideo = videos_list.filter((item) => item.id !== Number(idVideo));
        setData(data);
        setOtherVideo(otherVideo);
    }, [idVideo]);

    useEffect(() => {
        setPopupVisible(true);
        setIsFading(true);
    }, []);

    const handleClosePopup = () => {
        setIsFading(false);
        setTimeout(() => setPopupVisible(false), 300);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            handleClosePopup();
        }
    };

    useEffect(() => {
        if (isPopupVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isPopupVisible]);

    return (
        <section className="rounded-md w-full min-h-screen">
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <Link to={ROUTERS_PATHS.VIDEO} className="absolute left-3">
                    <IoIosArrowBack size={30} color="white" />
                </Link>
                <h1 className="px-20 text-base sm:text-xl font-semibold text-white text-center truncate max-w-full">
                    {data?.title}
                </h1>
            </div>
            <Video key={data?.id} url={data?.url}></Video>
            <div className="p-2 bg-white">
                <h3 className="text-base sm:text-xl text-black font-semibold">
                    {data?.description}
                </h3>
                <h4 className="text-base text-gray-400 font-semibold">{`${data?.views} Lượt xem`}</h4>
            </div>

            <h2 className="font-bold text-black p-2">Xem thêm</h2>

            {otherVideo.length > 0 &&
                otherVideo.map((video, index) => (
                    <Link
                        key={index}
                        state={{ data: video }}
                        to={ROUTERS_PATHS.VIDEO_DETAIL.replace(":id", video?.id.toString())}
                    >
                        <div className="bg-white flex p-2">
                            <img
                                src={video?.video_image}
                                className="w-[98px] h-[104px] sm:w-[160px] sm:h-[170px] object-cover"
                                alt=""
                            />
                            <div className="text-base p-3 font-bold flex flex-col justify-between">
                                <h3 className="text-sm sm:text-xl text-black">
                                    {video?.title}
                                </h3>
                                <h3 className="text-sm text-gray-400">{`${video?.views} lượt xem`}</h3>
                            </div>
                        </div>
                    </Link>
                ))}

            {isPopupVisible && (
                <>
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isFading ? "opacity-100" : "opacity-0"
                            }`}
                    ></div>

                    <div
                        ref={popupRef}
                        className={`fixed p-5 inset-0 flex items-center justify-center z-30 transition-all duration-300 transform ${isFading ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <div className="bg-white max-w-md w-full mx-4 text-center rounded-md shadow-lg">
                            <div className="relative flex justify-center p-3 text-white bg-[linear-gradient(90deg,#f905e5,#e6c3a1)]">
                                <h1 className="font-semibold">Xem video</h1>
                                <IoClose
                                    onClick={handleClosePopup}
                                    size={20}
                                    className="cursor-pointer absolute top-3 right-3"
                                />
                            </div>
                            <div className="text-base sm:text-lg p-4">
                                <h6
                                    className="text-[#f905e5] text-left tracking-tighter"
                                    style={{ lineHeight: 1.2 }}
                                >
                                    Những người chưa hoàn thành bình chọn chỉ cung cấp bản dùng
                                    thử 15 giây, hãy liên hệ với chuyên viên hướng dẫn bình chọn
                                    để trở thành thành viên của trang này, thưởng thức tất cả các
                                    video trên trang này và mở khóa dịch vụ tận nhà của những
                                    người đẹp nóng bỏng trong cùng một thành phố!
                                </h6>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default VideoContent;
