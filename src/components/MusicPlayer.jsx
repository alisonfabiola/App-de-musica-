import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ trackName, trackSrc }) => {
return (
    <div className="my-3">
        <h5>{trackName}</h5>
        <AudioPlayer
        src={trackSrc}
        onPlay={() => console.log(`Playing: ${trackName}`)}
        style={{ borderRadius: '8px' }}
        />
    </div>
    );
};

export default MusicPlayer;
