import React from "react";
import AddButton from '../img/AddBtn.svg';

import './styles/AddEmotion.css';

const AddEmotion = ({devmode, go, image}) => {
    let testText = null;

    if (devmode) {
        testText = "AddEmotionButton";
    }

    return (
        <div className="container">
            <div className="imgContent">
                <img className="imgInAddEmotion" src={image} />
            </div>

            {/*<div className="btnContent">
                <button className="addBtn">
                    <img className="imgBtn" src={AddButton} />
                </button>
            </div>*/}
        </div>
    )
};

export {AddEmotion};