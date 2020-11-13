import React from 'react';
import Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from  './Footer.module.css'

const date = new Date();

const footer = props => (
    <footer>
        <Container>
            <Row>
                <Col>
                    <h3>Navigation</h3>
                    <ul>
                        <li>Home</li>
                        <li>Beers</li>
                        <li>Breweries</li>
                    </ul>
                </Col>
                <Col>
                    <h3>Social</h3>
                    <ul className={styles.socialFooter}>
                        <li><FontAwesomeIcon size="lg" icon={faInstagram} /></li>
                        <li><FontAwesomeIcon size="lg" icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon size="lg" icon={faGithub} /></li>
                    </ul>
                </Col>
                <Col>
                    <h3>API Usage</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed orci eget urna imperdiet euismod. Quisque lobortis id nisi eget facilisis. Ut iaculis quam vitae magna aliquet rhoncus. Aenean nec convallis ipsum. Aliquam erat volutpat. Suspendisse in interdum leo.</p>
                </Col>
            </Row>
            <Row>
                <h4>@{date.getFullYear()}</h4>
            </Row>
        </Container>
    </footer>
);

export default footer;