import { Div, Panel, PanelHeader } from '@vkontakte/vkui';
import UserDiogramma from '../elements/UserDiogram';
import {HomeButton} from '../elements/HomeReturnButton';
import './styles/Diagram.css';

const Diagram = ({id, go, devmode}) => {
    return(
        <Panel>
            <Div>
                <HomeButton devmode={devmode} go={go}/>
            </Div>
            <Div className="pieCharmDiogramm">
                <div className="pieCharm">
                    <UserDiogramma />
                </div>
            </Div>
        </Panel>
        
    );
}

export default Diagram;