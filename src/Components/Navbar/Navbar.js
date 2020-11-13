import React from 'react';

// IMPORT COMPONENTS
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

// IMPORT ASSETS
import Logo from '../../Assets/images/beer-mug.png';

// IMPORT CSS
import styles from './Navbar.module.css';

const navbar = (props) => (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" />
            <strong>PINTLY</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link className={styles.navLink} as={Link} to="/">Home</Nav.Link>
                <Nav.Link className={styles.navLink} as={Link} to="/beers">Beers</Nav.Link>
                <Nav.Link className={styles.navLink} as={Link} to="/breweries">Breweries</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;