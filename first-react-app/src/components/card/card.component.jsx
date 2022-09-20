// import { Component } from 'react';

import './card.styles.css';

const Card = (props) => {
    
    const {name, id, email, avatarSrc} = props.cardContent;

    return(
        <div className="card-container" key={id}>
            <img src={avatarSrc} alt="person" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component{

//     render(){
//         // const {name, id} = this.props;
//         const {name, id, email, avatarSrc} = this.props.content;

//         return(
//         <div className="card-container" key={id}>
//             <img src={avatarSrc} alt="person" />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//         );
//     }
// }

export default Card;