import React from 'react';

import { LikesContext } from '../../Context/Context';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

import Styles from './Card.module.css';

const card = (props) => (
    <LikesContext.Consumer>
        {({context, likeItem}) => (
            <Card className={Styles.card} data-id={props.searchKey}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className={Styles.cardMyTitle}>{props.title}</Card.Title>
                    <Card.Subtitle className={`mb-2 text-muted ${Styles.cardMySubtitle}`}>{props.subtitle}</Card.Subtitle>
                    <Card.Text className={Styles.cardMyText}><strong>{props.info}</strong></Card.Text>
                    <FontAwesomeIcon onClick={likeItem} size="3x" icon={faHeart} />
                </Card.Body>
                <Button className={Styles.cardMyButton} onClick={props.modalHandler} variant="secondary">Learn More</Button>
            </Card>
        )}
    </LikesContext.Consumer>
);

export default card;