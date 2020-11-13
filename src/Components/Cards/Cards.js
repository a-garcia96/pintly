import React from 'react';

import Card from './Card/Card';

import Styles from './Cards.module.css'

const cards = (props) => {

    const cardList = props.splitData.map(obj => {
        if (props.page === '/beers/') {
            return (
                <Card key={obj.id}
                    img={obj.labels === undefined ? `https://i.pinimg.com/originals/c5/f0/fa/c5f0fa5ac14327b8330fde1c621ffa8a.jpg` : obj.labels.contentAwareMedium}
                    title={obj.name}
                    subtitle={obj.style === undefined ? 'N/A' : obj.style.category.name}
                    info={obj.abv}
                />
            );
        } else{
            return (
                <Card
                    key={obj.id} 
                    img={obj.images === undefined ? 'https://i.pinimg.com/originals/c5/f0/fa/c5f0fa5ac14327b8330fde1c621ffa8a.jpg' : obj.images.squareMedium}
                    title={obj.name}
                    subtitle={obj.established}
                    info={obj.website}
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