import React, { useRef, useState } from 'react'
import Tabs from './Components/Tabs'
import './App.css'

const App = () => {

    const audioPlayer = useRef()

    const [isPlaying, setIsPlaying] = useState(false)

    const [currentTime, setCurrentTime] = useState(0)
    const [seekValue, setSeekValue] = useState(0)

    const playPause = () => {

        if (isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }

        setIsPlaying(!isPlaying)
    };

    const onPlaying = () => {
        setCurrentTime(audioPlayer.current.currentTime);
        setSeekValue(
            (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
        );
    };

    return (
        <div>
            <Tabs />


            <div className='audioBox'>
                <audio
                    // controls
                    onTimeUpdate={onPlaying}
                    ref={audioPlayer}
                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3">
                </audio>
                <button onClick={playPause}>play</button>
                {/* <p>{currentTime}</p> */}
                {/* <button onClick={pause}>pause</button> */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={seekValue}
                    onChange={(e) => {
                        const seekto = audioPlayer.current.duration * (+e.target.value / 100);
                        audioPlayer.current.currentTime = seekto;
                        setSeekValue(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}

export default App