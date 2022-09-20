// import { Component } from "react";
import Card from '../card/card.component'

import './cards-list.styles.css';

const CardsList = ({listToDisplay}) => {

    return (
        <div className="card-list">
            {listToDisplay.map(item => <Card cardContent={item}/>)}
        </div>
    )
}

// class CardsList extends Component {
  
//     render() {

//         const { listToDisplay } = this.props;

//         return (
//         <div className="card-list">
//             {listToDisplay.map(person => {
//                 return (<Card content={person}/>);
//             })}
//         </div>
//         );
//     }
// }

export default CardsList;
