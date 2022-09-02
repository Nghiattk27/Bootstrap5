import React, { useRef } from 'react';
import './Button.scss';

function Button({ content }) {

    const contentBtnRef = useRef();

    return (
        <div className='Button'>
            <div className='contentBtn' ref={contentBtnRef} onMouseDown>{content}</div>
        </div>
    )
}

export default Button