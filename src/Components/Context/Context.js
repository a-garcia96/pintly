import React, { Component } from 'react';

const StateContext = React.createContext();

class Context extends Component {

    state = {
        likedBeers: [],
        likeBreweries: []
    }

    render() {
        return (
            <StateContext.Provider value={this.state}>
                {this.props.children}
            </StateContext.Provider>
        );
    }
}

export default Context;