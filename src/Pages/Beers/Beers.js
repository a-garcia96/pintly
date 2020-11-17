import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/contentPagination/contentPagination';
import VerticalModal from '../../Components/Modal/Modal';


//IMPORT AXIOS INSTANCE
import axios from '../../Utilities/Axios';


import Container from 'react-bootstrap/esm/Container';
import { isCompositeComponent } from 'react-dom/test-utils';

class Beers extends Component {
    state = {
        errorMessage: null,
        beers: null,
        loading: true,
        items: [],
        showModal: false
    };

    showModalHandler() {
        this.setState({showModal: true});
    }

    hideModalHandler () {
        this.setState({showModal: false});
    }

    componentDidMount = () => {
        axios.get('/beers/', {
            params: {
                key: process.env.REACT_APP_BEERS
            }
        })
            .then(response => {
                this.setState({ page: response.config.url, beers: response.data.data, loading: false });
            })
            .catch(error => {
                this.setState({ errorMessage: error, loading: false });
            });
    }



    render() {
        return (
            <Layout>
                <Container>
                    {this.state.loading ? <Loader /> : <Pagination modalHandler={this.showModalHandler.bind(this)} page={this.state.page} data={this.state.beers} />}
                    <VerticalModal show={this.state.showModal} onHide={this.hideModalHandler.bind(this)}/>
                </Container>
            </Layout>
        )
    }
}

export default Beers;