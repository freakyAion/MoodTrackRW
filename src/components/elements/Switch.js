import "./styles/switch.css"

const Toggle = ({devmode, handlestate, bodystate}) => {
    return(
        <div className="switcher">
            <div className={`body ${bodystate}`}></div>
            <div className={`handle ${handlestate}`}></div>
        </div>
    );
};

export {Toggle};