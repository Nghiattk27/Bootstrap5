import React from 'react';
import './ImageQuestion.scss';
import add from '../../images/add.png';
import ImgBx from '../ImgBx/ImgBx';
import CheckBx from './CheckBx/CheckBx';
import Button from '../Button/Button';

function ImageQuestion() {
    return (
        <div className='ImageQuestion'>
            <div className='header'>
                <div className='nextPrev'>
                    <span>
                        <i className="bi bi-chevron-left"></i>
                    </span>
                    <span>
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </div>
            </div>
            <div className='content'>
                <div className='question'>
                    <div className='questionContent'>
                        <h2>Câu 1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, saepe.</h2>
                    </div>
                    <div className='options'>
                        <ul>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                A. Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, incidunt.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo laborum iste.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                D. Lorem ipsum dolor sit.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                A. Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                B. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, incidunt.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo laborum iste.
                            </li>
                            <li>
                                <div className='checkBx'>
                                    <CheckBx />
                                </div>
                                D. Lorem ipsum dolor sit.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='imageBx'>
                    <div className='imgBx'>
                        <ImgBx img={add} />
                    </div>
                </div>
            </div>
            <div className='submit'>
                <div className='button'>
                    <Button content={"Nộp bài tập"} />
                </div>
            </div>
        </div>
    )
}

export default ImageQuestion