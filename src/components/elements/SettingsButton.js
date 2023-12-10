import React from 'react';
import {Button} from '@vkontakte/vkui';

import './styles/SettingsButton.css'    

const SettingsButton = ({devmode, go}) => {
    let testText = null;

    if (devmode) {
        testText = "SettingsButton";
    }

    return(
        <button className='settingsButton' onClick={go} data-to="settings">
			<img className="image"/>
            <p>{testText}</p>
		</button>
    );
};
export {SettingsButton};
