import { Component } from "react";
import Card from '../card/card.component'

import './cards-list.styles.css';

class CardsList extends Component {
  
    render() {

        console.log('rendering cardlist');

        const { listToDisplay } = this.props;

        return (
        <div className="card-list">
            {listToDisplay.map(person => {
                return (<Card content={person}/>);
            })}
        </div>
        );
    }
}

export default CardsList;
