import React from 'react';
import './styleCards.css'

function Cards(props) {
    return (
        <div className="Card">
            <img className="img-cards" src={`../assets/${props.name}.png`} alt={props.name} />
            <div class="Container">
                <strong className="text-container">{props.name}</strong>
                <strong className="text-container">Type/Ability:  {props.type} </strong>
            </div>
        </div>
    )
}

export default Cards