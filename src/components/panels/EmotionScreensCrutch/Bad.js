import React from "react";
import { HomeButton } from "../../elements/HomeReturnButton";
import { AddEmotion } from "../../elements/AddEmotion";
import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import BadImage from '../../img/BadImage.svg';
import { GroupOfEmotion } from "../../elements/GroupOfEmotions";
import { AddDescription } from "../../elements/AddDescription";

import "../styles/Global.css";
import "../styles/BeutifulScreen.css";

const Bad =({id, go, devmode, emotionHandle}) => {
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
                            <AddEmotion devmode={devmode} image={BadImage} />
                        </Div>
                    </Div>  

                    <Div className="NameEmotion">
                        <label className="text">Плохо</label>
                    </Div>
                </Div>

                <Div className="conteyner groupEmotion">
                    <Div>
                        <GroupOfEmotion devmode={devmode} firstEmotion={"раздраженность"} secondEmotion={"обида"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"неуверенность"} secondEmotion={"стыд"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"возмущение"} secondEmotion={"отвращение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"недоверие"} secondEmotion={"нетерпение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"усталость"} secondEmotion={"тревога"}/>
                    </Div>
                </Div>

                <Div>
                    <AddDescription />
                    <button onClick={()=> {emotionHandle("bad")}} className="button">Добавить</button>
                </Div>
            </Group>
        </Panel>
    )
};

export { Bad };