import React from 'react';
import {SettingsButton} from '../elements/SettingsButton'

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, devmode }) => {
	let panelHeader = null;
  
	if (devmode) {
	  	panelHeader = <PanelHeader>Home Screen</PanelHeader>;
	}

	function GetCurrentDate(separator='.') {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.getMonth() + 1;
	
		return `${date}${separator}${month < 10 ? `0 ${month}` : `${month}`}`
	}

	let today = GetCurrentDate();
  
	return (
	  	<Panel id={id}>
			{panelHeader}
			<Group>
		  		<Div className='Header'>
					<SettingsButton devmode={devmode} go={go}/>
		  		</Div>
		  		<Div className='Content'>
					<p>{today}</p>
		  		</Div>
		  		<Div className='Footer'>

		  		</Div>
			</Group>
	  	</Panel>
	);
};
export default Home;
