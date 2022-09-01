import React from 'react';
import './Responsive.scss';
import add from '../../images/add.png';
import Card from '../Card/Card';

function Responsive() {
    return (
        <div className='Responsive container'>
            <div className='text-center my-5'>
                <h1>Bootstrap 5 - Blog Posts Grid Layout</h1>
                <hr />
            </div>
            <div className='row'>
                <div className='col-xxl-3 col-md-4 col-sm-6 col'>
                    <Card />
                </div>
                <div className='col-xxl-3 col-md-4 col-sm-6 col'>
                    <Card />
                </div>
                <div className='col-xxl-3 col-md-4 col-sm-6 col'>
                    <Card />
                </div>
                <div className='col-xxl-3 col-md-4 col-sm-6 col'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Responsive