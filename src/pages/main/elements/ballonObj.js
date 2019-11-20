import React from "react";
import ballon from "../../assets/balloon.png";

const BallonObj = (props) => {    
    return(
        <img src={ballon} style={style.img} />
    );
}

const style = {
    img:{    
        width: '10%',
        position: 'relative',
        top: '20%',
        left: '10%',
    }
}  

export default BallonObj;
