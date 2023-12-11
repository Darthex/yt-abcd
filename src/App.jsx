import React, { useState, useEffect } from 'react';
import { getVideoDetails } from './api';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
    const [videoId, setVideoId] = useState('');
    const [input, setInput] = useState('');
    function getVideo(id) {
        getVideoDetails(id).then((videoDetails) => {
            setVideoId(videoDetails?.id);
        });
    }

    return (
        <div className="App">
            <input type="text" className="input" onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => getVideo(input)}>Search</button>
            {videoId && <VideoPlayer videoId={videoId} />}
        </div>
    );
};

export default App;
