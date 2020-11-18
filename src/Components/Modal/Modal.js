import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const verticalModal = (props) => (
    
    <Modal {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                {props.data[0].name}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{props.data[0].style ? props.data[0].style.shortName : ''}</h4>
            <p>{props.data[0].description ? props.data[0].description : 'No Info Found'}</p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
);

export default verticalModal;