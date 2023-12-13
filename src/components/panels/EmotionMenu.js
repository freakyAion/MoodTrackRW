import React from 'react';
import { HomeButton } from '../elements/HomeReturnButton';
import { EmotionsTagsButton } from '../elements/EmotionsTagsButton';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import Great from '../img/Great.svg';
import Good from '../img/GoodImage.svg';
import Normal from '../img/NormalImage.svg';
import Bad from '../img/BadImage.svg';
import Awful from '../img/AwfulImage.svg';

import "./styles/Global.css";
import "./styles/EmotionMenu.css"

const EmotionMenu = ({ id, go, devmode}) => {
	let panelHeader = null;
  
	if (devmode) {
	  	panelHeader = <PanelHeader>Emotion Menu</PanelHeader>;
	}

	let textGreat = "Отлично";
	let textGood = "Хорошо";
	let textNormal = "Нормально";
	let textBad = "Плохо";
	let textAwful = "Ужасно"

	let beutiful = "beutiful"

	return (
	  	<Panel id={id}>
			{panelHeader}
			<Group className='EmotionMenu'>
		  		<Div className='Header sizer'>
					<HomeButton devmode={devmode} go={go}/>
		  		</Div>
		  		<Div className='Content sizer'>
					{/*<p>{today}</p>*/}
					
						<Div className='emotionButton'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Great} text={textGreat} dataTo={"beatiful"}/>
						</Div>
						<Div className='emotionButton'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Good} text={textGood} dataTo={"good"}/>
						</Div>
						<Div className='emotionButton'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Normal} text={textNormal} dataTo={"normal"}/>
						</Div>
						<Div className='emotionButton'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Bad} text={textBad} dataTo={"bad"}/>
						</Div>
						<Div className='emotionButton'>
							<EmotionsTagsButton  devmode={devmode} go={go} image={Awful} text={textAwful} dataTo={"awful"}/>
						</Div>
					
		  		</Div>
		  		<Div className='Footer sizer'>
		  		</Div>
			</Group>
	  	</Panel>
	);
};
export default EmotionMenu;
