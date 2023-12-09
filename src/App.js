import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './components/panels/Home';
import Calendar from './components/panels/Calendar';
import Settings from './components/panels/Settings';
import EmotionMenu from './components/panels/EmotionMenu'
import EmotionScreen from './components/panels/EmotionScreen';
import Diagram from './components/panels/Diagram';
import {getDayData} from './DataBase.js'

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const [devmode, setDevMode] = useState(false);

	const toggleDev = (() => {
		if (devmode == false) setDevMode(true);
		else setDevMode(false);
		console.log("Devmode has been toggled");
	})

	var todayEmotions;
	var todayNotes;
	var todayTags;

	getDayData("", "", todayEmotions, todayNotes, todayTags);

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home devmode={devmode} emotions={todayEmotions} id='home' go={go} />
								<Settings devmode={devmode} toggleDev={toggleDev} id='settings' go={go}/>
								<EmotionMenu devmode={devmode} id='emotionMenu' go={go}/>
								<Calendar devmode={devmode} id='calendar' go={go}/>
								<EmotionScreen devmode={devmode} id='emotionWindow' go={go}/>
								<Diagram devmode={devmode} id='diagram' go={go}/>	
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;