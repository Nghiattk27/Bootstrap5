import React from 'react';
import './ImgBx.scss';

function ImgBx({ img }) {
    return (
        <div className='ImgBx'>
            <img src={img} className='img-fluid' />
        </div>
    )
}

export default ImgBx