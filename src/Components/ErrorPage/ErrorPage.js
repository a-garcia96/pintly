import React from 'react';

import Alert from 'react-bootstrap/Alert'

const errorPage = (props) => {
    return (
        <div>
            <Alert variant="danger">
                <Alert.Heading>Oh no!</Alert.Heading>
                <p>We weren't able to process your request please reload to try again.</p>
            </Alert>
        </div>
    );
}

export default errorPage;