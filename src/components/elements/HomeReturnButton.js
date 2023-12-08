import React from 'react';
import {Button} from '@vkontakte/vkui';

import './styles/HomeReturn.css'    

const HomeButton = ({devmode, go}) => {
    let testText = null;

    if (devmode) {
        testText = "HomeButton";
    }

    return(
        <Button className='homeButton' onClick={go} data-to="home">
			<img className="image"/>
            <p>{testText}</p>
		</Button>
    );
};
export {HomeButton};
