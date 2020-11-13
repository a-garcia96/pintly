import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2'
});

export default instance;
