import React, { useRef, useState } from 'react';
import "./VideoCustom.scss";
import Oibanoi from "../../images/Oibanoi.mp4";

function VideoCustom() {

    const videoRef = useRef();
    const progressRef = useRef();
    const [videoState, setVideoState] = useState(false);
    const [before, setBefore] = useState(false);
    const [playState, setPlayState] = useState(false);
    const [videoValue, setVideoValue] = useState(0);

    const videoOnClick = () => {
        videoRef.current.play()
        // setVideoState(!videoState);
        // videoState ? videoRef.current.pause() : videoRef.current.play();
    }

    const VideoCustomHandleMouseOver = () => {
        setBefore(true);
    }

    const VideoCustomHandleMouseOut = () => {
        setBefore(false);
    }

    const beforeHandleClick = () => {
        setPlayState(!playState);
    }

    const videoHandleTimeUpdate = () => {
        console.log(1);
        let progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setVideoValue(progress);
        progressRef.current.style.background = `linear-gradient(to right,rgb(241, 50, 50) 0%, rgb(241, 50, 50) ${progress}%,  #fff ${progress}%, #fff 100%)`;
    }

    const progressHandleChange = setTimeout((e) => {
        console.log(2);
        let progess = e.target.value;
        videoRef.current.currentTime = progess / 100 * videoRef.current.duration;
        // setVideoValue(progess);
    }, 500)

    return (
        <div className='VideoCustom' onMouseOver={VideoCustomHandleMouseOver}
            onMouseOut={VideoCustomHandleMouseOut}
            onClick={videoOnClick}>

            <video ref={videoRef} onTimeUpdate={videoHandleTimeUpdate}>
                <source src={Oibanoi} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {
                before &&
                <div className='before' onClick={beforeHandleClick}>
                    {
                        playState &&
                        <i className="bi bi-pause-fill"></i>
                    }
                    {
                        playState === false &&
                        <i className="bi bi-play-fill"></i>
                    }
                </div>
            }

            <div className='controls'>
                <input type='range' min='0' max='100' value={videoValue}
                    onChange={(e) => { progressHandleChange(e) }}
                    ref={progressRef}
                    step='0.1' />
            </div>

        </div>
    )

}

export default VideoCustom