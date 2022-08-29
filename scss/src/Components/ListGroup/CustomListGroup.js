import React from 'react';
import './CustomListGroup.scss';
import {
    ListGroup
} from 'react-bootstrap';

function CustomListGroup() {
    return (
        <div className='CustomListGroup'>
            <ListGroup variant="flush" className='listGroup'>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item action variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Secondary
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                    Success
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                    Danger
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                    Warning
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                    Info
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                    Dark
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default CustomListGroup