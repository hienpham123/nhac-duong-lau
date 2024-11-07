import React, { useRef, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import VideoCard from './VideoCard';
import { videos_list } from "../../../mock/video-list"
import ROUTERS_PATHS from "../../shared/constants/router-path";
import { Link } from "react-router-dom";

export default function WatchVideo() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabLabels = [
        'Việt Nam',
        'Mới nhất',
        'Hot nhất',
        'Đề xuất',
        'Châu Á',
        'Live',
        'Thật Thà',
        'Châu Âu và Châu Mỹ',
        'Anime',
    ];

    const videos = videos_list
    return (
        <section className='w-full h-full min-h-screen'>
            <div className="flex h-12 md:h-20 items-center bg-[linear-gradient(90deg,#f905e5,#e6c3a1)] justify-center">
                <h1 className="text-xl sm:text-3xl font-semibold text-white text-center">
                    {`Xem phim`}
                </h1>
            </div>
            <Box sx={{ width: '100%', borderTop: '1px solid #fff' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        background: 'linear-gradient(90deg, #f905e5, #e6c3a1)',
                        paddingLeft: '0px'
                    }}
                >
                    {tabLabels.map((label, index) => (
                        <Tab
                            key={index}
                            label={label}
                            value={index + 1}
                            sx={{
                                color: 'white',
                                fontSize: 15,
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: 'white',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>
            <div className='grid grid-cols-2 gap-2 p-2'>
                {videos.length && videos.map(video => <Link to={ROUTERS_PATHS.VIDEO_DETAIL.replace(':id', video.id.toString()) }><VideoCard video={video} /></Link>)}
            </div>
        </section>
    )
}
