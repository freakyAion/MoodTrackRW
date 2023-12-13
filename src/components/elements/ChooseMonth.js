import React from "react";
import { Div } from "@vkontakte/vkui";
import NextBtn from "../img/NextBtn.svg";

import './styles/ChooseMonth.css';


const ChooseMonth = ({devmode}) => {
    let testText = null;

    if (devmode) {
        testText = "Choose month";
    }
    
    return (
        <Div className="blockChoose">
            <Div className="dataMonth">
                <label className="txtMonth">Month</label>
            </Div>

            <Div>
                <button className="chooseMonth">
                    <img className="imgNextBtn" src={NextBtn} />
                </button>
            </Div>
        </Div>
    )
}

export {ChooseMonth};