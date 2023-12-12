import React from 'react';

import { HomeButton } from '../elements/HomeReturnButton';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import "./styles/Global.css";
import "./styles/Settings.css"

const Settings = ({ id, go, devmode, toggleDev }) => {
	let panelHeader = null;
  
	if (devmode) {
	    panelHeader = <PanelHeader>Settings Screen</PanelHeader>;
	}
  
	return (
	    <Panel id={id}>
		    {panelHeader}
		    <div className='Group'>
		        <Div className='Header sizer'>
                    <HomeButton devmode={devmode} go={go}/>
		        </Div>
		        <Div className='Content sizer'>
                    <button onClick={toggleDev}>Toggle Devmode</button>
                </Div>
		        <div className='Footer sizer'>
		        </div>
		    </div>
	  </Panel>
	);
};
export default Settings;
