import React from "react";
import { Div } from "@vkontakte/vkui";
import './styles/GroupOfEmotion.css';

const GroupOfEmotion = ({devmode, firstEmotion, secondEmotion}) => {
    let testText = null;

    if (devmode) {
        testText = "Emotions InGroup";
    }

    const [buttonState, setButtonState] = React.useState("btn_off");

    const switchState = () => {
        setButtonState(state => state === "btn_off" ? "btn_on" : "btn_off");
    };

    return (
        <Div className="line">
            <button className={`btn ${buttonState}`}>
                <label className="text">{firstEmotion}</label>
            </button>

            <button className="btn">
                <label className="text">{secondEmotion}</label>
            </button>
        </Div>
    )
};

export {GroupOfEmotion};