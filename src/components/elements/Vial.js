import './styles/vial.css';
import React, { useState } from 'react';

export function Vial({emotions}) {
    {/*const [classes, setClasses] = useState(emotionClasses || ["emotion", "emotion", "emotion"]);*/}

    return (
        <div>
            <div className='vial_container'>
                <div className="emotions"> 
                    {emotions.map((emotion, index) => 
                        ( 
                            <div key={index} className={`emotion ${emotion}`}></div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Vial;
