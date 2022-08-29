import React from 'react';
import { useState } from 'react';
import './CustomModal.scss';
import {
    Modal, Button, ListGroup
} from 'react-bootstrap';
import CustomCloseButton from '../CloseButton/CustomCloseButton';
import CustomListGroup from '../ListGroup/CustomListGroup';

function CustomModal() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='CustomModal'>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose} size='lg'>
                <div className='modalHeader'>
                    <Modal.Header >
                        <Modal.Title>Modal heading</Modal.Title>
                        <div>
                            <CustomCloseButton handleClose={handleClose} />
                        </div>
                    </Modal.Header>
                </div>
                <div className='modalBody'>
                    <Modal.Body>
                        {/* <h4>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h4> */}
                        <CustomListGroup />
                    </Modal.Body>
                </div>
            </Modal>
        </div>
    )
}

export default CustomModal