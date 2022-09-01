import React from 'react';
import './Card.scss';
import add from '../../images/add.png';

export default function Card() {
    return (
        <div className='Card'>
            <div className='content'>
                <div className='imgBx'>
                    <img src={add} className='img-fluid' />
                </div>
                <h3>Pham Thi Ngoc Hoa</h3>
                <h4>Teacher</h4>
                <button className='btn btn-outline-primary'>View Profile</button>
            </div>
            <div className='info'>
                <h4>phone: 0869668743</h4>
                <h4>email: nghiaphamtrung2709@gmail.com</h4>
                <h4>school: dai hoc quoc gia Ha Noi</h4>
            </div>
        </div>
    )
}
