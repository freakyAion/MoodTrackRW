import React from "react";
import { Div, Textarea } from "@vkontakte/vkui";

import './styles/AddDescription.css';

const AddDiscription = ({devmode}) => {
    let testText = null;

    if (devmode) {
        testText = "Add a discription";
    }

    return (
        <Div className="contentInDiscription">
            <Div className="containerDescription">
                <label className="text">Напишите свои мысли</label>
            </Div>

            <Div className="textarea">
                <Textarea />
            </Div>
        </Div>
    )
};

export {AddDiscription};