import React from 'react';

import './styles/HomeReturn.css'  

const HomeButton = ({devmode, go}) => {
    let testText = null;

    if (devmode) {
        testText = "HomeButton";
    }

    return(
        <button className='homeButton' onClick={go} data-to="home">
			<img className="image"/>
            <p>{testText}</p>
		</button>
    );
};
export {HomeButton};
