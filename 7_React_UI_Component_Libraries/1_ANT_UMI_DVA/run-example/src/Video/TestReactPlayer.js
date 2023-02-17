import React from 'react';
import ReactPlayer from 'react-player';

export default function TestReactPlayer() {
    return <ReactPlayer url="http://0.0.0.0:55557/stream/clover_q7.flv" />;
}

/**
 * Không support file flv
 * https://github.com/cookpete/react-player/issues/112
 * https://github.com/cookpete/react-player/issues/958
 */
