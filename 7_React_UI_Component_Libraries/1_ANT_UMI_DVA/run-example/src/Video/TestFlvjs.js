import React, { useRef, useEffect } from 'react';
import flvjs from 'flv.js';

const FlvPlayer = ({ url }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        let flvPlayer = null;
        if (flvjs.isSupported()) {
            flvPlayer = flvjs.createPlayer({
                type: 'flv',
                url: url,
            });
            flvPlayer.attachMediaElement(videoRef.current);
            flvPlayer.load();
        }
        return () => {
            if (flvPlayer) {
                flvPlayer.unload();
                flvPlayer.detachMediaElement();
                flvPlayer.destroy();
            }
        };
    }, [url]);

    return (
        <>
            <p>Video</p>
            <video ref={videoRef} controls={true} style={{ width: '100%', height: 'auto' }} />
        </>
    );
};

export default FlvPlayer;
