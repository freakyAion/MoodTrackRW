import React from 'react';
import {Button, Group} from '@vkontakte/vkui';

import './styles/NavBar.css'    

const Navbar = ({devmode, go}) => {
    let testText = [null, null, null];

    if (devmode) {
        testText = ['Calendar', 'Add Emotion', 'Diagram'];
    }

    return(
        <Group>
            <Button className='calendar' onClick={go} data-to="calendar">
			    <img className="image"/>
                <p>{testText[0]}</p>
		    </Button>
            <Button className='addEmotion' onClick={go} data-to="emotionMenu">
                <img className="image"/>
                <p>{testText[1]}</p>
            </Button>
            <Button className='diagram' onClick={go} data-to="diagram">
                <img className="image"/>
                <p>{testText[2]}</p>
            </Button>
        </Group>
    );
};
export {Navbar};
