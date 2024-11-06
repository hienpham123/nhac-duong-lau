import React from 'react';

const VideoCard = ({ video }) => {
    return (
        <div className="bg-white rounded-md overflow-hidden relative shadow-md transition-transform transform hover:scale-105">
            <div className="relative overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-opacity duration-300"
                    src={video.video_image}
                    alt=""
                />
                <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div className="absolute bottom-0 left-0 text-white text-sm bg-gradient-to-t from-gray-800 via-gray-600 to-transparent p-4 w-full flex justify-between items-center">
                <h1 className="font-semibold truncate">{video.title}</h1>
                <h1 className="text-xs font-light">{`Lượt xem: ${video.views}`}</h1>
            </div>
        </div>
    );
};

export default VideoCard;
