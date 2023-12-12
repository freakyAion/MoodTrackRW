import React from 'react';
import {Group} from '@vkontakte/vkui';

import './styles/NavBar.css' 

import Calendar from "../img/Calendar.svg";
import Diagram from "../img/Diagram.svg";
import Add from "../img/Add.svg";


const Navbar = ({devmode, go}) => {
    let testText = [null, null, null];

    if (devmode) {
        testText = ['Calendar', 'Add Emotion', 'Diagram'];
    }

    return(
        <div className='navbar'>
            <button className='calendar button' onClick={go} data-to="calendar">
			    <img className="image" src={Calendar} alt="Календарь"/>
                <p>{testText[0]}</p>
		    </button>
            <button className='addEmotion button' onClick={go} data-to="emotionMenu">
                <img className="image" src={Add} alt="Добавить новую эмоцию"/>
                <p>{testText[1]}</p>
            </button>
            <button className='diagram button' onClick={go} data-to="diagram">
                <img className="image" src={Diagram} alt="Годовая диаграмма"/>
                <p>{testText[2]}</p>
            </button>
        </div>
    );
};
export {Navbar};
