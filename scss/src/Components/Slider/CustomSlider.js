import React, { useEffect } from 'react';
import './CustomSlider.scss';
import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomSlider({ slider }) {

    const sliderRef = useRef();
    const indexRef = useRef();
    const slideImgRef = useRef();
    const [count, setCount] = useState(1);
    const [imgWidth, setImgWidth] = useState();

    const activeIndex = (index, prev) => {
        // console.log(index, prev);
        if (index > slider.length - 2) index = 1;
        if (index <= 0) index = slider.length - 2;
        if (prev > slider.length - 2) prev = slider.length - 2;
        if (prev <= 0) prev = 1;
        indexRef.current.children[prev - 1].className = '';
        indexRef.current.children[index - 1].className = 'active';
    }

    const leftSlidehandleClick = () => {
        if (count <= 0) return;
        else {
            setCount(count - 1);
            activeIndex(count - 1, count);
            sliderRef.current.style.transform = `translate(${(count - 1) * - imgWidth}px)`;
            sliderRef.current.style.transition = '0.5s';
        }
    }

    const rightSlidehandleClick = () => {
        if (count > slider.length - 2) return;
        else {
            setCount(count + 1);
            activeIndex(count + 1, count);
            sliderRef.current.style.transform = `translate(${(count + 1) * - imgWidth}px)`;
            sliderRef.current.style.transition = '0.5s';
        }
    }

    const sliderHandleTransitionEnd = () => {
        if (count == 0) {
            setCount(slider.length - 2);
            sliderRef.current.style.transition = 'none';
            sliderRef.current.style.transform = `translate(${(slider.length - 2) * - imgWidth}px)`;
        }
        if (count > slider.length - 2) {
            setCount(1);
            sliderRef.current.style.transition = 'none';
            sliderRef.current.style.transform = `translate(${(1) * - imgWidth}px)`;
        }
    }

    const slideImgHandleLoad = () => {
        setImgWidth(slideImgRef.current.width)
    }

    return (
        <div className='CustomSlider'>
            <div className='sliderContent'>
                <span className='leftSlide' onClick={leftSlidehandleClick}>
                    <i className="bi bi-arrow-left"></i>
                </span>
                <span className='rightSlide' onClick={rightSlidehandleClick}>
                    <i className="bi bi-arrow-right"></i>
                </span>
                <div className='slider' ref={sliderRef} onTransitionEnd={sliderHandleTransitionEnd}>
                    {
                        slider.map((slideImg) => {
                            return <img ref={slideImgRef} src={slideImg} onLoad={slideImgHandleLoad} className="img-fluid" alt="..." ></img>
                        })
                    }
                </div>
            </div>
            <div className='indexBx' ref={indexRef}>
                {
                    slider.map((a, idx) => {
                        if (idx > 0 && idx < slider.length - 1) {
                            if (idx == 1)
                                return <span className='active'> {idx} </span>
                            else
                                return <span className=''> {idx} </span>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CustomSlider