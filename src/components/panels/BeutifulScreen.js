import React from "react";
import { HomeButton } from "../elements/HomeReturnButton";
import { AddEmotion } from "../elements/AddEmotion";
import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import Beutiful from '../img/Great.svg';
import { GroupOfEmotion } from "../elements/GroupOfEmotions";
import { AddDiscription } from "../elements/AddDescription";

import "./styles/Global.css";
import './styles/BeutifulScreen.css';

const BeutifulScreen =({id, go, devmode}) => {
    let panelHeader = null;

    if (devmode) {
        panelHeader = <PanelHeader>BeutifulScreen</PanelHeader>
    }

    return (
        <Panel id={id}>
            {panelHeader}

            <Group className='beutifulScreen'>
                <Div>
                    <HomeButton devmode={devmode} go={go} data-to="home" />
                </Div>
                <Div className="conteyner">
                    <Div className="imgWithBtn">
                        <Div>
                            <AddEmotion devmode={devmode} image={Beutiful} />
                        </Div>
                    </Div>  

                    <Div className="NameEmotion">
                        <label className="text">Отлично</label>
                    </Div>
                </Div>

                <Div className="conteyner groupEmotion">
                    <Div>
                        <GroupOfEmotion devmode={devmode} firstEmotion={"гармония"} secondEmotion={"облегчение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"воодушевление"} secondEmotion={"любовь"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"счастье"} secondEmotion={"благодарность"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"влюбленность"} secondEmotion={"эйфория"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"трепет"} secondEmotion={"восхищение"}/>
                    </Div>
                </Div>

                <Div>
                    <AddDiscription />
                </Div>
            </Group>
        </Panel>
    )
};

export default BeutifulScreen;