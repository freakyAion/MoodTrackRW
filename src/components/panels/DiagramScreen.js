import { Div, Group, Panel, PanelHeader } from '@vkontakte/vkui';
import Diagram from '../elements/Diagram';
import {HomeButton} from '../elements/HomeReturnButton';
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
                <Div className='Header'>
                    <HomeButton devmode={devmode} go={go}/>
                </Div>
                <Div className='Content'>
                    <Div className="pieCharmDiogramm">
                        <div className="pieCharm">
                            <Diagram />
                        </div>
                    </Div>
                </Div>
                <Div className='Footer'>

                </Div>
            </Group>
        </Panel>
        
    );
}

export default DiagramScreen;