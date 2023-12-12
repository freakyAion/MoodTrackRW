import React from 'react';

import { HomeButton } from '../elements/HomeReturnButton';
import { Toggle } from '../elements/Switch';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import "./styles/Global.css";
import "./styles/Settings.css"
import "../elements/styles/button.css";
import { func } from 'prop-types';

const Settings = ({ id, go, devmode, toggleDev }) => {
	let panelHeader = null;
	let devSetDate = null;
	if (devmode) {
	    panelHeader = <PanelHeader>Settings Screen</PanelHeader>;
		devSetDate = <button className="button settingButton" onClick={toggleDev}><p>Dev: Set Date</p></button>;
	}

	const [handleState, setHandleState] = React.useState("handle_off");
	const [bodyState, setBodyState] = React.useState("body_off");

  	const switchState = () => {
    	setHandleState(state => state === "handle_off" ? "handle_on" : "handle_off");
    	setBodyState(state => state === "body_off" ? "body_on" : "body_off");
  	};

	return (
	    <Panel id={id}>
		    {panelHeader}
		    <div className='Group'>
		        <Div className='Header sizer'>
                    <HomeButton devmode={devmode} go={go}/>
		        </Div>
		        <Div className='Content sizer settings'>
                    <button className="button settingButton" onClick={toggleDev}><p>Dev: Toggle Devmode</p></button>
                    {devSetDate}
                    <button className="button settingButton notificationButton" onClick={switchState}><p>Напоминания</p><Toggle devmode={devmode} bodystate={bodyState} handlestate={handleState}/></button>
                </Div>
		        <div className='Footer sizer'>
		        </div>
		    </div>
	  </Panel>
	);
};
export default Settings;
