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

const EmotionMenu = ({ id, go, devmode, todayEmotions }) => {
	let panelHeader = null;
  
	if (devmode) {
	  	panelHeader = <PanelHeader>Emotion Menu</PanelHeader>;
	}

	let textGreat = "Отлично";
	let textGood = "Хорошо";
	let textNormal = "Нормально";
	let textBad = "Плохо";
	let textAwful = "Ужасно"

	return (
	  	<Panel id={id}>
			{panelHeader}
			<Group className='EmotionMenu'>
		  		<Div className='Header'>
					<HomeButton devmode={devmode} go={go}/>
		  		</Div>
		  		<Div className='Content'>
					{/*<p>{today}</p>*/}
					<Div className='emotionContainer'>
						<Div className='blocs'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Great} text={textGreat}/>
						</Div>
						<Div className='blocs'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Good} text={textGood}/>
						</Div>
						<Div className='blocs'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Normal} text={textNormal}/>
						</Div>
						<Div className='blocs'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Bad} text={textBad}/>
						</Div>
						<Div className='blocs'>
							<EmotionsTagsButton devmode={devmode} go={go} image={Awful} text={textAwful}/>
						</Div>
					</Div>
		  		</Div>
		  		<Div className='Footer'>
					<Navbar devmode={devmode} go={go}/>
		  		</Div>
			</Group>
	  	</Panel>
	);
};
export default EmotionMenu;
