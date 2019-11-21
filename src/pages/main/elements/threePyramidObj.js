import React from "react";
import threePyramidObj from "../../assets/threepyramid.png";

const ThreePyramidObj = (props) => {    
    return(
        <img src={threePyramidObj} style={style.img} />
    );
}

const style = {
    img:{    
        width: '25%',
        position: 'absolute',
        top: '65%',
        left: '40%',
    }
}  

export default ThreePyramidObj;
