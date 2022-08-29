import React from 'react';
import './CloseButton.scss';
import { CloseButton } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

function CustomCloseButton({ handleClose }) {
    return (
        <div className='CloseButton' onClick={handleClose}>
            <div className='closeBg'>
                <i className="bi bi-x-lg"></i>
            </div>
        </div>
    )
}

export default CustomCloseButton