import React from 'react';

import { Card } from '../card/card.component'

import './card-list.styles.css';

export const CardList = props => (
    <div className="card-list">{props.kawarjeya.map ( kawarji => (
        <Card key={kawarji.id} kawarji={kawarji}/>
    )
    )}</div>
    
);
