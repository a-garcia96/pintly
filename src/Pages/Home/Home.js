import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom'


import beerImage from '../../Assets/images/hero_666x1000.jpg'

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
                <Jumbotron style={{ minHeight: '50vh', backgroundColor: '#ffffff' }} fluid>
                    <Container>
                        <Row>
                            <Col>
                                <div sm="auto" lg={5}>
                                    <h1>Discover the World of Craft Beers</h1>
                                    <p>The world of craft beers is huge! Many starting to enjoy craft beers often get overwhelemed by the almost endless options. Use Pintly to learn more about the drinks out there including their makers.</p>
                                    <Button><a href="#beer-section" style={{color: "#fff"}}>Learn More</a></Button>
                                </div>
                            </Col>
                            <Col sm="auto" lg={7}>
                                <img className={HomepageStyle.heroImage} src={beerImage} alt="hand holding a glass with beer in it." />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <section className={HomepageStyle.homeSections}>
                        <h2>Craft?!</h2>
                        <Row>
                            <Col sm="auto" lg={6}>
                                <p>If you've been hiding under a rock then you most likely have never heard the word craft be put behind the word beer before. You must be thinking "Kraft Mac 'n Cheese?". The answer is simply no. Craft isn't mass produced. Think Corona, Bud, Miller Lite, Etc.</p>
                            </Col>
                            <Col sm="auto" lg={6}>
                                <p>Unlike mass produced beer, that uses the cheapest ingredients possible to make the price low for beer, craft beer is made with hand selected ingredients chosen and made by master brewers that truly do love beer. This process produces a wide variety of beers with distinct flavors and colors.</p>
                            </Col>
                        </Row>
                    </section>
                </Container>
                <div id="beer-section" className={HomepageStyle.diagonalBox}>
                    <Container className={HomepageStyle.diagonalBoxContent}>
                        <h2>Beers 101</h2>
                        <Row>
                            <Col sm="auto" lg={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                            <Col sm="auto" lg={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Link to="/beers"><Button variant="secondary">Learn Beers</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <section className={HomepageStyle.homeSections}>
                        <h2>Breweries 101</h2>
                        <Row>
                            <Col sm="auto" lg={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Col>
                            <Col sm="auto" lg={6}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Link to="/breweries"><Button variant="primary">Learn Breweries</Button></Link>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </Layout>
        )
    }
}

export default Home;