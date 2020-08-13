import React from 'react';
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
        <img
            alt='kawarji'
            src={require(`../../../public/img/${props.kawarji.id}.jpg`)}
            width="300" height="300"
            />
        <h2>{props.kawarji.name}</h2>

    </div>
)