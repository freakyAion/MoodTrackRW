import React from "react";
import { Div } from "@vkontakte/vkui";
import './styles/GroupOfEmotion.css';

const GroupOfEmotion = ({devmode, firstEmotion, secondEmotion}) => {
    let testText = null;

    if (devmode) {
        testText = "Emotions InGroup";
    }

    return (
        <Div className="line">
            <button className="btn">
                <label className="text">{firstEmotion}</label>
            </button>

            <button className="btn">
                <label className="text">{secondEmotion}</label>
            </button>
        </Div>
    )
};

export {GroupOfEmotion};