import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/contentPagination/contentPagination';

//IMPORT AXIOS INSTANCE
import axios from '../../Utilities/Axios';
import Container from 'react-bootstrap/esm/Container';

class Beers extends Component {
    state = {
        errorMessage: null,
        beers: null,
        loading: true,
        items: []
    };

    componentDidMount() {
        axios.get('/beers/', {
            params: {
                key: '276004031382a9b322a752feaa83a820'
            }
        })
            .then(response => {
                this.setState({ page: response.config.url, beers: response.data.data, loading: false });
                console.log(this.state);
            })
            .catch(error => {
                this.setState({ errorMessage: error, loading: false });
            });
    }



    render() {
        return (
            <Layout>
                <Container>
                    {this.state.loading ? <Loader /> : <Pagination page={this.state.page} data={this.state.beers} />}
                </Container>
            </Layout>
        )
    }
}

export default Beers;