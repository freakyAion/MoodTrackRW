import React from 'react';
import { SettingsButton } from '../elements/SettingsButton';
import { Navbar } from '../elements/Navbar';
import { Vial } from '../elements/Vial';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import "./styles/Global.css";

const Home = ({ id, go, devmode, todayEmotions }) => {
	
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
	  	<Panel className='Panel' id={id}>
			{panelHeader}
			<div className='Group'>
		  		<Div className='Header sizer'>
					<SettingsButton devmode={devmode} go={go}/>
		  		</Div>
		  		<Div className='Content sizer'>
					<p>{today}</p>
		  		</Div>
		  		<div className='Footer sizer'>
					<Navbar devmode={devmode} go={go}/>
		  		</div>
			</div>
	  	</Panel>
	);
};
export default Home;
