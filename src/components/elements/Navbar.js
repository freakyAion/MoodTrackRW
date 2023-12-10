import React from 'react';
import {Group} from '@vkontakte/vkui';

import './styles/NavBar.css'    

const Navbar = ({devmode, go}) => {
    let testText = [null, null, null];

    if (devmode) {
        testText = ['Calendar', 'Add Emotion', 'Diagram'];
    }

    return(
        <Group>
            <button className='calendar' onClick={go} data-to="calendar">
			    <img className="image"/>
                <p>{testText[0]}</p>
		    </button>
            <button className='addEmotion' onClick={go} data-to="emotionMenu">
                <img className="image"/>
                <p>{testText[1]}</p>
            </button>
            <button className='diagram' onClick={go} data-to="diagram">
                <img className="image"/>
                <p>{testText[2]}</p>
            </button>
        </Group>
    );
};
export {Navbar};
