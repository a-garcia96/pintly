import React from 'react';

import missing from '../../Assets/images/missing.svg';

import Card from './Card/Card';

import Styles from './Cards.module.css'

const cards = (props) => {

    const cardList = props.splitData.map(obj => {
        if (props.page === '/beers/') {
            return (
                <Card key={obj.id}
                    img={obj.labels === undefined ? missing : obj.labels.contentAwareMedium}
                    title={obj.name}
                    subtitle={obj.style === undefined ? 'N/A' : obj.style.shortName}
                    info={obj.abv === undefined ? `ABV: N/A` : `ABV: ${obj.abv}`}
                    modalHandler={props.modalHandler}
                    searchKey={obj.id}
                />
            );
        } else{
            return (
                <Card
                    key={obj.id} 
                    img={obj.images === undefined ? missing : obj.images.squareMedium}
                    title={obj.name}
                    subtitle={obj.established}
                    info={obj.website === undefined ? `Link: N/A` : `Link: ${obj.website}`}
                    modalHandler={props.modalHandler}
                    searchKey={obj.id}
                />
            );
        }
    });

    return (
        <div className={Styles.Cards}>
            {cardList}
        </div>
    );
}

export default cards;