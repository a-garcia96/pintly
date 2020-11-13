import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/contentPagination/contentPagination';
import axios from '../../Utilities/Axios';
import Container from 'react-bootstrap/esm/Container';

class Breweries extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        axios.get('/breweries/', {
            params: {
                key: '276004031382a9b322a752feaa83a820'
            }
        })
            .then(response => {
                this.setState({ page: response.config.url, breweries: response.data.data, loading: false });
            })
            .catch(error => {
                this.setState({ errorMessage: error, loading: false });
            });
    }

    render() {
        return (
            <Layout>
                <Container>
                    {this.state.loading ? <Loader /> : <Pagination page={this.state.page} data={this.state.breweries} />}
                </Container>
            </Layout>
        );
    }
}

export default Breweries