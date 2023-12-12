import React from 'react';
import {Button} from '@vkontakte/vkui';

import './styles/SettingsButton.css'    

import Settings from '../img/Menu.svg'

const SettingsButton = ({devmode, go}) => {
    let testText = null;

    if (devmode) {
        testText = "SettingsButton";
    }

    return(
        <button className='settingsButton' onClick={go} data-to="settings">
			<img className="image" src={Settings} alt='Настройки'/>
            <p>{testText}</p>
		</button>
    );
};
export {SettingsButton};
