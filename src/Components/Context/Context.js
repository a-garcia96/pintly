import React from 'react';

const StateContext = React.createContext();

const context = (props) => (
    <StateContext.Provider value={props.componentState}>
        {props.children}
    </StateContext.Provider>
);

export default context;