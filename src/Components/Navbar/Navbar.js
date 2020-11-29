import React from 'react';

// IMPORT CSS
import styles from './Navbar.module.css';

// IMPORT COMPONENTS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// IMPORT ASSETS
import Logo from '../../Assets/images/beer-mug.png';
import AltLogo from '../../Assets/images/beer_illustration.png';
import { Container } from 'react-bootstrap';

const navbar = (props) => (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link className={styles.navLink} as={Link} to="/">
                    <img src={AltLogo} width="35" height="40" style={{marginRight: '10px'}} className="d-inline-block align-top" alt="React Bootstrap logo" />
                    <strong>PINTLY</strong>
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className={styles.navLink} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className={styles.navLink} as={Link} to="/beers">Beers</Nav.Link>
                    <Nav.Link className={styles.navLink} as={Link} to="/breweries">Breweries</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default navbar;