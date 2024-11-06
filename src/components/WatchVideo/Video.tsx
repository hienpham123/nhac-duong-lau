import React from 'react';
import LazyLoad from 'react-lazyload';
import ReactPlayer from 'react-player';

const Video = ({ url }) => {
    return (
        <div className='bg-white p-2 rounded-md'>
            <LazyLoad offset={100}>
                <ReactPlayer url={url} height='100%' width="100%" controls/>
            </LazyLoad>
        </div>
    );
};

export default Video;
