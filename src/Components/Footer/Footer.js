import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

import styles from './Footer.module.css'

const date = new Date();

const footer = props => (
    <footer>
        <Container>
            <Row>
                <Col sm="auto" lg={4}>
                    <h5>Navigation</h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/beers">Beers</Link></li>
                        <li><Link to="/breweries">Breweries</Link></li>
                    </ul>
                </Col>
                <Col sm="auto" lg={4}>
                    <h5>Social</h5>
                    <ul className={styles.socialFooter}>
                        <li><a href="https://www.instagram.com/alex_gaarciaa/"><FontAwesomeIcon size="lg" icon={faInstagram} /></a></li>
                        <li><a href="https://www.linkedin.com/in/agarcia96"><FontAwesomeIcon size="lg" icon={faLinkedin} /></a></li>
                        <li><a href="https://github.com/a-garcia96"><FontAwesomeIcon size="lg" icon={faGithub} /></a></li>
                    </ul>
                </Col>
                <Col sm="auto" lg={4}>
                    <h5>API Usage</h5>
                    <p>All data is provide by BreweryDB. To learn more about the API please refer to the <a href="https://brewerydb.com/developers/docs">site documentation</a></p>
                </Col>
            </Row>
        </Container>
        <section className={`${styles.footerCopyright}`}>
            <Container>
                <p className="text-center">Copyright {date.getFullYear()} @ Alex Garcia</p>
            </Container>
        </section>
    </footer>
);

export default footer;