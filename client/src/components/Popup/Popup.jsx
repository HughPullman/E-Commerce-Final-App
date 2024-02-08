import React from "react";
import "./Popup.scss"

const Popup = ({trigger, handlePopupState}) =>{
    return trigger ? ( 
        <div className="popup">
            <div className="popup-inner">
                <div className="popupInfo">ACCOUNT CREATED</div>
                <button className="closeButton" onClick={() =>handlePopupState()}>CLOSE</button>
            </div>
        </div>
    ) : <></>;
};

export default Popup