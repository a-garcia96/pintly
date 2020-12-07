import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/contentPagination/contentPagination';
import VerticalModal from '../../Components/Modal/Modal';


//IMPORT AXIOS INSTANCE
import axios from '../../Utilities/Axios';


import Container from 'react-bootstrap/esm/Container';

class Beers extends Component {
    state = {
        errorMessage: null,
        beers: null,
        loading: true,
        items: [],
        showModal: false,
        singleBeerData: null
    };

    showModalHandler(e) {
        // COPY THE STATE OBJECT FOR IMMUTABLE OPERATIONS
        const stateCopy = {...this.state};

        // SET THE SHOW MODAL PROPERTY VALUE TO TRUE TO SHOW MODAL
        stateCopy.showModal = true;

        // CREATE A NEW STATE PROPERTY THAT FILTERS THE BEERS OBJ ARRAY INTO AN ARRAY WITH THE DATA OF THE BEER THAT WAS CLICKED ON. 
        stateCopy.singleBeerData = stateCopy.beers.filter(beer => beer.id === e.target.parentElement.dataset.id);

        // SET THE STATE WITH THE NEW STATE
        this.setState(stateCopy);
    }

    hideModalHandler () {
        // MAKE COPY OF STATE FOR IMMUTABLE OPERATIONS
        const stateCopy = {...this.state};
        //SET SHOW MODAL TO FALSE
        stateCopy.showModal = false;
        // REMOVE THE SINGLE BEER DATA PROPERTY FROM STATE
        stateCopy.singleBeerData = null;
        // SET STATE WITH MODIFIED STATE COPY
        this.setState(stateCopy);
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
                this.setState({errorMessage: error, loading: false })
                });
    }



    render() {
        return (
            <Layout>
                <Container>
                    {this.state.loading ? <Loader /> : <Pagination modalHandler={this.showModalHandler.bind(this)} page={this.state.page} data={this.state.beers} />}

                    {this.state.singleBeerData === null ? null : <VerticalModal data={this.state.singleBeerData} show={this.state.showModal} onHide={this.hideModalHandler.bind(this)}/>}
                    
                </Container>
            </Layout>
        )
    }
}

export default Beers;