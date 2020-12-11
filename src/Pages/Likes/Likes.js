import React from 'react';
import Pagination from '../../Components/contentPagination/contentPagination';


import { Container } from 'react-bootstrap';

import { LikesContext } from '../../Components/Context/Context';

import Layout from '../../Components/Layout/Layout';

const likes = props => (
    <LikesContext.Consumer>
        {(context) => (
            <Layout>
                <Container>
                    <h1>{context.state.text}</h1>
                    <Pagination data={context.state.likes} />
                </Container>
            </Layout>
        )}
    </LikesContext.Consumer>
)

export default likes;