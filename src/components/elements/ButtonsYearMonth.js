import React from "react";
import { Div } from "@vkontakte/vkui";

import './styles/ButtonsYearMonth.css';

const ButtonsYearMonth = ({devmode}) => {
    let testText = null;

    if (devmode) {
        testText = "Choose Year or Month";
    }

    return (
        <Div className="blockWithButtons">
            <Div>
                <button className="btnMonth">
                    <label className="textMonth">Месяц</label>
                </button>
            </Div>

            <Div>
                <button className="btnYear">
                    <label className="textYear">Год</label>
                </button>
            </Div>
        </Div>
    )
};

export {ButtonsYearMonth};