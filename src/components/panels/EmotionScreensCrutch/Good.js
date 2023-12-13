import React from "react";
import { HomeButton } from "../../elements/HomeReturnButton";
import { AddEmotion } from "../../elements/AddEmotion";
import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import GoodImage from '../../img/GoodImage.svg';
import { GroupOfEmotion } from "../../elements/GroupOfEmotions";
import { AddDescription } from "../../elements/AddDescription";

import "../styles/Global.css";
import "../styles/BeutifulScreen.css";

const Good =({id, go, devmode, emotionHandle}) => {
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
                            <AddEmotion devmode={devmode} image={GoodImage} />
                        </Div>
                    </Div>  

                    <Div className="NameEmotion">
                        <label className="text">Хорошо</label>
                    </Div>
                </Div>

                <Div className="conteyner groupEmotion">
                    <Div>
                        <GroupOfEmotion devmode={devmode} firstEmotion={"уважение"} secondEmotion={"предвкушение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"любовь к себе"} secondEmotion={"забота"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"гордость"} secondEmotion={"удивление"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"преданность"} secondEmotion={"доброта"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"бодрость"} secondEmotion={"ностальгия"}/>
                    </Div>
                </Div>

                <Div>
                    <AddDescription />
                    <button onClick={()=> {emotionHandle("good")}} className="button">Добавить</button>
                </Div>
            </Group>
        </Panel>
    )
};

export { Good };