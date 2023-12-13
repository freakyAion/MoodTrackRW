import React from "react";
import { HomeButton } from "../../elements/HomeReturnButton";
import { AddEmotion } from "../../elements/AddEmotion";
import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import AwfulImage from '../../img/AwfulImage.svg';
import { GroupOfEmotion } from "../../elements/GroupOfEmotions";
import { AddDescription } from "../../elements/AddDescription";

import "../styles/Global.css";
import "../styles/BeutifulScreen.css";

const Awful =({id, go, devmode, emotionHandle}) => {
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
                            <AddEmotion devmode={devmode} image={AwfulImage} />
                        </Div>
                    </Div>  

                    <Div className="NameEmotion">
                        <label className="text">Ужасно</label>
                    </Div>
                </Div>

                <Div className="conteyner groupEmotion">
                    <Div>
                        <GroupOfEmotion devmode={devmode} firstEmotion={"утрата"} secondEmotion={"истощение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"страх"} secondEmotion={"разочарование"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"унижение"} secondEmotion={"отчаяние"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"безысходность"} secondEmotion={"ярость"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"депрессивность"} secondEmotion={"горе"}/>
                    </Div>
                </Div>

                <Div>
                    <AddDescription />
                    <button onClick={()=> {emotionHandle("awful")}} className="button">Добавить</button>
                </Div>
            </Group>
        </Panel>
    )
};

export { Awful };