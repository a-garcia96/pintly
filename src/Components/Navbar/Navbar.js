import React from 'react';

// IMPORT CSS
import styles from './Navbar.module.css';

// IMPORT COMPONENTS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// IMPORT ASSETS
import Logo from '../../Assets/images/hop.svg';
import { Container } from 'react-bootstrap';

const navbar = (props) => (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="/Home">
                <Nav.Link className={`${styles.navLink} ${styles.navLinkLogo} ${styles.navLinkHover}`} as={Link} to="/">
                    <img src={Logo}
                    width="60"
                    height="60"
                    className="d-inline-block align-top" 
                    alt="Pinlty Logo" />
                    Pintly
                </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className={`${styles.navLink} ${styles.navLinkHover} ${styles.navLinkText}`} as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className={`${styles.navLink} ${styles.navLinkHover} ${styles.navLinkText}`} as={Link} to="/beers">Beers</Nav.Link>
                    <Nav.Link className={`${styles.navLink} ${styles.navLinkHover} ${styles.navLinkText}`} as={Link} to="/breweries">Breweries</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default navbar;