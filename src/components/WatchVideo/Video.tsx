import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
    return (
        <div className='rounded-md'>
            <LazyLoad offset={100}>
                <ReactPlayer url={url} height={330} width="100%" controls />
            </LazyLoad>
        </div>
    );
};

export default Video;
