import React from 'react';
import './card.list.component.css'
import {Card} from '../card/card.component'
export const CardList = (props)=>(
    <div className='card-list'>
        {props.children.map((monster) => (
            <Card monster={monster} img={'https://robohash.org/'+monster.id+'?set=set2'} key={monster.id} />
        ))}
    </div>
)
