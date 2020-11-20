import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import beerImage from '../../Assets/images/hero.jpg'

import HomepageStyle from './Home.module.css';

class Home extends Component {
    state = {};

    componentDidMount() {
        this.setState({
            pageName: 'HOME',
            description: 'Lorem Ipsum Doler'
        });
    }

    render() {
        return (
            <Layout>
                <Jumbotron style={{ minHeight: '75vh', padding: '100px 0', backgroundColor: '#ffffff'}} fluid>
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <h1>Discover the World of Craft Beers</h1>
                                    <p>The world of craft beers is huge! Many starting to enjoy craft beers often get overwhelemed by the almost endless options. Use Pintly to learn more about the drinks out there including their makers.</p>
                                    <Button>Learn More</Button>
                                </div>
                            </Col>
                            <Col>
                                <div className={HomepageStyle.heroShape}></div>
                                <img style={ {boxShadow: '1px 3px 6px 0 #333' ,border: '5px solid #990E35', height: '60vh', width: '20vw', position: 'absolute', top: '10%', right: '0'} } src={beerImage} alt="picture of a hand holding a glass with beer in it."/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container style={{ boxSizing: 'border-box', padding: '100px' }}>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Container>
            </Layout>
        )
    }
}

export default Home;