import React from "react";
import ballon from "../../assets/balloon.png";
import {Link } from "react-router-dom";

const BallonObj = (props) => {    
    return(
        <Link to='/activity'>
            <img src={ballon} style={style.img} />
        </Link>
    );
}

const style = {
    img:{    
        width: '10%',
        position: 'relative',
        top: '15%',
        left: '10%',
    }
}  

export default BallonObj;

