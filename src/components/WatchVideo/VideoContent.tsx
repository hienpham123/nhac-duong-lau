import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { videos_list } from "../../../mock/video-list";
import ROUTERS_PATHS from "../../shared/constants/router-path";
import Video from "./Video";

const VideoContent = ({ url }) => {
    const  {id:idVideo}  = useParams()
    const [data, setData] = useState<any>()
    const [otherVideo, setOtherVideo] = useState<any>([])

    useEffect(() => {
        const data: any = videos_list.find((item) => idVideo && item.id == Number(idVideo));
        const otherVideo = videos_list.filter((item) => item.id != Number(idVideo));
        setData(data)
        setOtherVideo(otherVideo)
    }, [idVideo])
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

            {otherVideo.length > 0 && otherVideo.map((video, index) => (
                <Link key={index} state={{ data: video }} to={ROUTERS_PATHS.VIDEO_DETAIL.replace(':id', video?.id.toString())}>
                    <div className="bg-white flex p-2">
                        <img
                            src={video?.video_image}
                            className="w-[98px] h-[104px] sm:w-[160px] sm:h-[170px] object-cover"
                            alt=""
                        />
                        <div className="text-base p-3 font-bold flex flex-col justify-between">
                            <h3 className="text-sm sm:text-xl text-black">{video?.title}</h3>
                            <h3 className="text-sm text-gray-400">{`${video?.views} lượt xem`}</h3>
                        </div>
                    </div>
                </Link>

            ))}
        </section>
    );
};

export default VideoContent;
