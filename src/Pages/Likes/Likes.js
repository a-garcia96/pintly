import React from 'react';
import { Container } from 'react-bootstrap';

import Context from '.././../Components/Context/Context';

import Layout from '../../Components/Layout/Layout';

const likes = props => (
    <Context.Consumer>
        <Layout>
            <Container>
                <h1>Your saved beers and breweries!</h1>
            </Container>
        </Layout>
    </Context.Consumer>
);

export default likes;