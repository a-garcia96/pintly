import React, { Component } from 'react';

import axios from '../../Utilities/Axios';

export const LikesContext = React.createContext();

export class LikesProvider extends Component {

    state = {
        ids: [],
        likes: [],
        page: '/likes/'
    }

    render()  {

        return (
            <LikesContext.Provider value={{
                state: this.state,
                likeItem: (e) => {
                    let stateCopy = { ...this.state };
                    let itemID = e.target.closest(".card").dataset.id;
                    let likeButton = e.target.closest("svg");

                    console.log(likeButton);
                    
                    axios.get(`/beer/${itemID}`, {
                        params: {
                            key: process.env.REACT_APP_BEERS
                        }
                    })
                    .then(response => {
                        let fetchedData = response.data.data;

                        if(!stateCopy.ids.includes(fetchedData.id)) {
                            stateCopy.ids.push(itemID);
                            stateCopy.likes.push(fetchedData);
                            console.log("Liked!")
                            likeButton.style.color = 'red'
                        } else {
                            let itemIndex = stateCopy.ids.indexOf(itemID);
                            stateCopy.ids.splice(itemIndex, 1);
                            stateCopy.likes.splice(itemIndex, 1);
                            console.log("Unliked!")
                            likeButton.style.color = 'black'
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });

                    this.setState(stateCopy);
                },
                
            }}>
                {this.props.children}
            </LikesContext.Provider>
        )
    }
}