import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Styles from './Card.module.css';

const card = (props) => (
    <Card className={Styles.card} data-id={props.searchKey}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
            <Card.Text><strong>{props.info}%</strong></Card.Text>
        </Card.Body>
        <Button onClick={props.modalHandler} variant="secondary">Learn More</Button>
    </Card>
);

export default card;