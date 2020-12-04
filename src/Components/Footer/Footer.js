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
                <Col className={styles.footerNavigation} sm={12} lg={4}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/beers">Beers</Link></li>
                        <li><Link to="/breweries">Breweries</Link></li>
                    </ul>
                </Col>
                <Col className={styles.footerSocialLinks} sm={12} lg={4}>
                    <h3>Follow Me</h3>
                    <ul className={styles.socialFooter}>
                        <li><a href="https://www.instagram.com/alex_gaarciaa/"><FontAwesomeIcon size="2x" icon={faInstagram} /></a></li>
                        <li><a href="https://www.linkedin.com/in/agarcia96"><FontAwesomeIcon size="2x" icon={faLinkedin} /></a></li>
                        <li><a href="https://github.com/a-garcia96"><FontAwesomeIcon size="2x" icon={faGithub} /></a></li>
                    </ul>
                </Col>
                <Col className={styles.footerApiDetails} sm="auto" lg={4}>
                    <h3>API Usage</h3>
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