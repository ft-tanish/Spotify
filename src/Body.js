import React, { useState } from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log('hhhhhhhhhhh', discover_weekly)
  return (
    discover_weekly && <div className='body'>
        <Header spotify={spotify}/>

        <div className='body__infoText'>
            <img src={discover_weekly?.images[0]?.url} alt=""/>
            <div className='body__infoText'>
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Body;