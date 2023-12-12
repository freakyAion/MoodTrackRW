import React from 'react';
import {HomeButton} from '../elements/HomeReturnButton';
import { Navbar} from '../elements/Navbar';
import { EmotionsTagsButton } from '../elements/EmotionsTagsButton';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import Great from '../../components/img/Great.svg';
import Good from '../../components/img/Good.svg';
import Normal from '../../components/img/Normal.svg';
import Bad from '../../components/img/Bad.svg';
import Awful from '../../components/img/Awful.svg';

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
					<Div className='emotionContainer'>
						<Div className='button'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Great} text={textGreat} dataTo={beutiful}/>
						</Div>
						<Div className='button'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Good} text={textGood}/>
						</Div>
						<Div className='button'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Normal} text={textNormal}/>
						</Div>
						<Div className='button'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Bad} text={textBad}/>
						</Div>
						<Div className='button'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Awful} text={textAwful}/>
						</Div>
					</Div>
		  		</Div>
		  		<Div className='Footer sizer'>
		  		</Div>
			</Group>
	  	</Panel>
	);
};
export default EmotionMenu;
