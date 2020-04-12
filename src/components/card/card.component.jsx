import React from 'react'
import './card.css'
export const Card = (props) => (
    <div className='card-container'>
        <img src={props.img}/>
        <h3>{props.monster.name}</h3>
    </div>
)