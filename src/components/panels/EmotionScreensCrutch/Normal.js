import React from "react";
import { HomeButton } from "../../elements/HomeReturnButton";
import { AddEmotion } from "../../elements/AddEmotion";
import { Div, Group, Panel, PanelHeader } from "@vkontakte/vkui";
import NormalImage from '../../img/NormalImage.svg';
import { GroupOfEmotion } from "../../elements/GroupOfEmotions";
import { AddDescription } from "../../elements/AddDescription";

import "../styles/Global.css";
import "../styles/BeutifulScreen.css";

const Normal =({id, go, devmode, emotionHandle}) => {
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
                            <AddEmotion devmode={devmode} image={NormalImage} />
                        </Div>
                    </Div>  

                    <Div className="NameEmotion">
                        <label className="text">Нормально</label>
                    </Div>
                </Div>

                <Div className="conteyner groupEmotion">
                    <Div>
                        <GroupOfEmotion devmode={devmode} firstEmotion={"теплота"} secondEmotion={"принятие"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"эмпатия"} secondEmotion={"спокойствие"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"доверие"} secondEmotion={"увлечение"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"радость"} secondEmotion={"симпатия"}/>

                        <GroupOfEmotion devmode={devmode} firstEmotion={"интерес"} secondEmotion={"надежда"}/>
                    </Div>
                </Div>

                <Div>
                    <AddDescription />
                    <button onClick={()=> {emotionHandle("normal")}} className="button">Добавить</button>
                </Div>
            </Group>
        </Panel>
    )
};

export { Normal };