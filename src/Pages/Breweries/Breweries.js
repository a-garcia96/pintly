import React, { Component } from 'react';

import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/contentPagination/contentPagination';
import VerticalModal from '../../Components/Modal/Modal';


import axios from '../../Utilities/Axios';


import Container from 'react-bootstrap/esm/Container';

class Breweries extends Component {

    state = {
        loading: true,
        showModal: false,
    }

    showModalHandler() {
        this.setState({showModal: true});
    }

    hideModalHandler () {
        this.setState({showModal: false});
    }

    componentDidMount() {
        axios.get('/breweries/', {
            params: {
                key: process.env.REACT_APP_BREWERIES
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
                    {this.state.loading ? <Loader /> : <Pagination modalHandler={this.showModalHandler.bind(this)} page={this.state.page} data={this.state.breweries} />}
                    <VerticalModal show={this.state.showModal} onHide={this.hideModalHandler.bind(this)}/>
                </Container>
            </Layout>
        );
    }
}

export default Breweries