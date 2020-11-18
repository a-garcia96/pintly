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
        singleBreweryData: null
    }

    showModalHandler(e) {
        // COPY THE STATE OBJECT FOR IMMUTABLE OPERATIONS
        const stateCopy = { ...this.state };

        // SET THE SHOW MODAL PROPERTY VALUE TO TRUE TO SHOW MODAL
        stateCopy.showModal = true;

        // CREATE A NEW STATE PROPERTY THAT FILTERS THE BEERS OBJ ARRAY INTO AN ARRAY WITH THE DATA OF THE BEER THAT WAS CLICKED ON. 
        stateCopy.singleBreweryData = stateCopy.breweries.filter(beer => beer.id === e.target.parentElement.dataset.id);

        // SET THE STATE WITH THE NEW STATE
        this.setState(stateCopy);
    }

    hideModalHandler() {
        // MAKE COPY OF STATE FOR IMMUTABLE OPERATIONS
        const stateCopy = { ...this.state };
        //SET SHOW MODAL TO FALSE
        stateCopy.showModal = false;
        // REMOVE THE SINGLE BEER DATA PROPERTY FROM STATE
        stateCopy.singleBreweryData = null;
        // SET STATE WITH MODIFIED STATE COPY
        this.setState(stateCopy);
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
                    {this.state.singleBreweryData === null ? null : <VerticalModal data={this.state.singleBreweryData} show={this.state.showModal} onHide={this.hideModalHandler.bind(this)} />}
                </Container>
            </Layout>
        );
    }
}

export default Breweries