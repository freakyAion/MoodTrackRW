import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './components/panels/Home';
import Calendar from './components/panels/Calendar';
import Settings from './components/panels/Settings';
import EmotionMenu from './components/panels/EmotionMenu'
import { Beatiful } from './components/panels/EmotionScreensCrutch/Beatiful.js';
import { Good } from './components/panels/EmotionScreensCrutch/Good.js';
import { Normal } from './components/panels/EmotionScreensCrutch/Normal.js';
import { Bad } from './components/panels/EmotionScreensCrutch/Bad.js';
import { Awful } from './components/panels/EmotionScreensCrutch/Awful.js';
import DiagramScreen from './components/panels/DiagramScreen';
import { getDayData } from './DataBase.js';

import './components/panels/styles/Global.css';

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

	/*var todayEmotions;
	var todayNotes;
	var todayTags;

	getDayData("", "", todayEmotions, todayNotes, todayTags);*/

	const [emotions, setEmotions] = useState(['empty', 'empty', 'empty']);
	const [currentIndex, setCurrentIndex] = useState(2);

	const emotionSwitch = (emotion) => {
	    const updatedEmotions = [...emotions];
	    updatedEmotions[currentIndex] = emotion;
	    const nextIndex = (currentIndex - 1) % emotions.length;
	    setEmotions(updatedEmotions);
	    setCurrentIndex(nextIndex);
		go;
	};

	// ^ this is old code that works. I didn't want to use it since our plan was to start over, but shitty communication from ^
	// ^ one of the responsible people forces me to use these shortcuts. It pisses me off a whole bloody lotf                  ^

	return (
		<ConfigProvider appearance="light">
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout>
						<SplitCol>
							<View className="Group" activePanel={activePanel}>
								<Home devmode={devmode} emotions={emotions} id='home' go={go} />
								<Settings devmode={devmode} toggleDev={toggleDev} id='settings' go={go}/>
								<EmotionMenu devmode={devmode} id='emotionMenu' go={go}/>
								<Calendar devmode={devmode} id='calendar' go={go}/>
								<Beatiful emotionHandle={emotionSwitch} devmode={devmode} id='beatiful' go={go}/>
								<Good emotionHandle={emotionSwitch} devmode={devmode} id='good' go={go}/>
								<Normal emotionHandle={emotionSwitch} devmode={devmode} id='normal' go={go}/>
								<Bad emotionHandle={emotionSwitch} devmode={devmode} id='bad' go={go}/>
								<Awful emotionHandle={emotionSwitch} devmode={devmode} id='awful' go={go}/>
								<DiagramScreen devmode={devmode} id='diagram' go={go}/>	
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;