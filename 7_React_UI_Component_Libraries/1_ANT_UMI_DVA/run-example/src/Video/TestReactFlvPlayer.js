import React from 'react';
import FlvPlayer from 'react-flv-player';

const FlvVideoPlayer = ({ url }) => {
    return <FlvPlayer url={url} type="flv" isMuted={false} hasAudio={true} hasVideo={true} />;
};

export default FlvVideoPlayer;
