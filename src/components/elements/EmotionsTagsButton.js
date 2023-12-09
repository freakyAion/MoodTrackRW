import React from "react";
import { Button } from "@vkontakte/vkui";

import './styles/EmotionsTagsButton.css';

const EmotionsTagsButton = ({devmode, go, image, text}) => {
    let testText = null;

    if (devmode) {
        testText = "ToTagsButtons";
    }

    return(
        <button className='emotionButton' onClick={go}>
            <div className="buttonСontent">
                <div className="imgContent">
                    <div className="imgContainer">
                        <img className="img" src={image} />
                    </div>  
                </div>

                <div className="textContent">
                    <div className="textContainer">
                        <p className="text">{text}</p>
                    </div>
                </div>
            </div>
        </button>
    )
};

export {EmotionsTagsButton};