import React from 'react';
import {SettingsButton} from '../elements/SettingsButton'

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser, devmode }) => {
	let panelHeader = null;
  
	if (devmode) {
	  panelHeader = <PanelHeader>Home Screen</PanelHeader>;
	}
  
	return (
	  <Panel id={id}>
		{panelHeader}
		<Group>
		  <Div className='Header'>
			<SettingsButton devmode={devmode}/>
		  </Div>
		  <Div className='Content'>

		  </Div>
		  <Div className='Footer'>

		  </Div>
		</Group>
	  </Panel>
	);
  };
export default Home;
