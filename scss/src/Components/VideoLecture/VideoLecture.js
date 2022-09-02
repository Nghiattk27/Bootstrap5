import React from 'react';
import "./VideoLecture.scss";
import Oibanoi from '../../images/Oibanoi.mp4'

function VideoLecture() {
    return (
        <div className='VideoLecture'>
            <div className='header'>
                <h2>Bài giảng Video</h2>
            </div>
            <div className='content'>
                <video width="720" controls>
                    <source src={Oibanoi} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default VideoLecture