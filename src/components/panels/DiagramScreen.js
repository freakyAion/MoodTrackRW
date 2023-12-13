import { Div, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import Diagram from '../elements/Diagram';
import {HomeButton} from '../elements/HomeReturnButton';
import { ChooseMonth } from '../elements/ChooseMonth';
import {Navbar} from '../elements/Navbar';
import { ButtonsYearMonth } from '../elements/ButtonsYearMonth';
import './styles/Diagram.css';
import './styles/Global.css'

const DiagramScreen = ({id, go, devmode}) => {
    
    let panelHeader = null;
  
	if (devmode) {
	  	panelHeader = <PanelHeader>Diagram Screen</PanelHeader>;
	}
    
    return(
        <Panel className='Panel' id={id}>
            {panelHeader}
            <Group className='Group'>
                <Div className='Header sizer'>
                    <HomeButton devmode={devmode} go={go}/>
                </Div>

                <Div className='screenDiagram'>
                    <Div className='blockChoose'>
                        <ChooseMonth devmode={devmode} />
                    </Div>

                    <Div className='monthAndYear'>
                        <ButtonsYearMonth devmode={devmode} go={go} />
                    </Div>

                    <Div className='Content sizer'>
                        <Div className="pieCharmDiogramm">
                            <div className="pieCharm">
                                <Diagram />
                            </div>
                        </Div>
                    </Div>
                    
                    <Div className='Footer sizer'>
                        <Navbar />
                    </Div>
                </Div>
                
            </Group>
        </Panel>
        
    );
}

export default DiagramScreen;