import React from 'react';

import './styles/HomeReturn.css'  

import Home from '../img/Home.svg' 

const HomeButton = ({devmode, go}) => {
    let testText = null;

    if (devmode) {
        testText = "HomeButton";
    }

    return(
        <button className='homeButton' onClick={go} data-to="home">
			<img className="image" src={Home} alt="Главный Экран"/>
            <p>{testText}</p>
		</button>
    );
};
export {HomeButton};
