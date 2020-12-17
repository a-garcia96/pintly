import React from 'react';

import { Container } from 'react-bootstrap';

import { LikesContext} from '../../Components/Context/Context';

import missing from '../../Assets/images/missing.svg'

import Card from '../../Components/Cards/Card/Card';

import Layout from '../../Components/Layout/Layout';

const Likes = props => {

    
    return (
        <LikesContext.Consumer>
            {context => (
                <Layout>
                    <Container>
                        {console.log(context.state.likes.length)}
                        
                        {context.state.likes.length === 0 ? <div><p>You haven't liked anything yet please go back and add some items...</p></div> : context.state.likes.map(obj => <Card key={obj.id} img={obj.labels === undefined ? missing : obj.labels.contentAwareMedium} title={obj.name} subtitle={obj.style === undefined ? 'N/A' : obj.style.shortName} info={obj.abv === undefined ? 'N/A' : `ABV: ${obj.abv}`} searchKey={obj.id}/>)} 
                    </Container>
                </Layout>
            )}
            </LikesContext.Consumer>
    )
}

export default Likes;