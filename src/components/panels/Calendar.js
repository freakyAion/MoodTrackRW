import React from 'react';

import { HomeButton } from '../elements/HomeReturnButton';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import "./styles/Global.css";

const Calendar = ({ id, go, devmode, toggleDev }) => {
	let panelHeader = null;
    let debugCalendarText = null
  
	if (devmode) {
	    panelHeader = <PanelHeader>Calendar Screen</PanelHeader>;
        debugCalendarText = "Calendar Block"
	}
  
	return (
	    <Panel id={id}>
		    {panelHeader}
		    <Group>
		        <Div className='Header sizer'>
                    <HomeButton devmode={devmode} go={go}/>
		        </Div>
		        <Div className='Content sizer'>
                    <div className='calendar'>
                        {debugCalendarText}
                    </div>
                    <img className='image'/>
                </Div>
		        <Div className='Footer sizer'>
		        </Div>
		    </Group>
	  </Panel>
	);
};
export default Calendar;
