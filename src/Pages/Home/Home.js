import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'


import beerImage from '../../Assets/images/hero_666x1000.jpg'
import beerIllustration from '../../Assets/images/beer_illustration.png'

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
                            <Col xs={{ span: 12, order: 2 }} sm="auto" md={{ span: 6, order: 1 }}>
                                <div>
                                    <h1 className={HomepageStyle.tagline}>Discover the World of Craft Beers</h1>
                                    <p>The world of craft beers is huge! Many starting to enjoy craft beers often get overwhelemed by the almost endless options. Use Pintly to learn more about the drinks out there including their makers.</p>
                                    <div className={HomepageStyle.buttonCenterUtil}>
                                        <Button ><a href="#beer-section" style={{ color: "#fff" }}>Learn More</a></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 12, order: 1 }} sm="auto" md={{ span: 6, order: 2 }}>
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
                <div className={HomepageStyle.diagonalBox}>
                    <Container id="beer-section" className={HomepageStyle.diagonalBoxContent}>
                        <h2>Beers</h2>
                        <Row>
                            <Col xs={{ span: 12, order: 2 }} sm="auto" md={{ span: 6, order: 1 }}>
                                <p>Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used.</p>
                                <p>Beer is distributed in bottles and cans and is also commonly available on draught, particularly in pubs and bars.</p>
                                <Link className={HomepageStyle.buttonCenterUtil} to="/beers"><Button variant="secondary">Learn Beers</Button></Link>
                            </Col>
                            <Col xs={{ span: 12, order: 1 }} sm="auto" md={{ span: 6, order: 2 }}>
                                <img className={`mx-auto d-block ${HomepageStyle.beerIllustration}`} src={beerIllustration} alt="Illustration of beers being cheered" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <section className={HomepageStyle.homeSections}>
                        <h2>Breweries</h2>
                        <Row>
                            <Col xs={{ span: 12, order: 1 }} sm="auto" md={{ span: 6, order: 1 }}>
                                <p>TEST</p>
                            </Col>
                            <Col xs={{ span: 12, order: 2 }} sm="auto" md={{ span: 6, order: 1 }}>
                                <p>A brewery or brewing company is a business that makes and sells beer. The place at which beer is commercially made is either called a brewery or a beerhouse, where distinct sets of brewing equipment are called plant.</p>
                                <Link className={HomepageStyle.buttonCenterUtil} to="/breweries"><Button variant="primary">Learn Breweries</Button></Link>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </Layout>
        )
    }
}

export default Home;