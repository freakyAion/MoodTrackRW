import React from 'react';

import {HomeButton} from '../elements/HomeReturnButton';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Settings = ({ id, go, devmode, toggleDev }) => {
	let panelHeader = null;
  
	if (devmode) {
	    panelHeader = <PanelHeader>Settings Screen</PanelHeader>;
	}
  
	return (
	    <Panel id={id}>
		    {panelHeader}
		    <Group>
		        <Div className='Header'>
                    <HomeButton devmode={devmode} go={go}/>
		        </Div>
		        <Div className='Content'>
                    <button onClick={toggleDev}>Toggle Devmode</button>
                </Div>
		        <Div className='Footer'>
		        </Div>
		    </Group>
	  </Panel>
	);
};
export default Settings;
