import React from "react";
import { Div, Textarea } from "@vkontakte/vkui";

import './styles/AddDescription.css';

const AddDescription = ({devmode}) => {
    let testText = null;

    if (devmode) {
        testText = "Add a discription";
    }

    return (
        <Div className="contentInDescription">
            <div className="containerDescription">
                <label className="text">Напишите свои мысли</label>
            </div>

            <Div className="textarea">
                <Textarea />
            </Div>
        </Div>
    )
};

export {AddDescription};