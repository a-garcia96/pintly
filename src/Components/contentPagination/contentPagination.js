import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Cards from '../Cards/Cards';


import Styles from './contentPagination.module.css'

class contentPagination extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 1,
            currentPage: 1,
            totalPages: this.props.data ? Math.ceil(this.props.data.length / 12) : 1,
            splitData: this.props.data ? this.props.data.slice(0, 12) : null,
            start: 1,
            end: 12
        }
    }

    changePageHandler(num) {
        const stateCopy = {...this.state};
        stateCopy.active = num;
        stateCopy.currentPage = num
        stateCopy.active = num;
        stateCopy.end = 12 * num;
        stateCopy.start = stateCopy.end - 12;
        stateCopy.splitData = this.props.data.slice(stateCopy.start, stateCopy.end);

        this.setState({...stateCopy});
    }
    
    

    render(props) {

        const pageItems = [];
        
        for (let num = 1; num <= this.state.totalPages; num++) {
            pageItems.push(<Pagination.Item key={num} active={num === this.state.active} onClick={() => this.changePageHandler(num)}>{num}</Pagination.Item>);
        }

        return (
            <div className={Styles.contentPagination}>
                <Pagination style={{fontSize: '1.6rem'}}>
                    {pageItems}
                </Pagination>
                    <Cards modalHandler={this.props.modalHandler} page={this.props.page} splitData={this.state.splitData}/>
                <Pagination style={{fontSize: '1.6rem'}}>
                    {pageItems}
                </Pagination>
            </div>

        )
    }
}

export default contentPagination;