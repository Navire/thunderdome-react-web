import React from "react";
import plane from "../../assets/plane.png";

const PlaneObj = (props) => {    
    return(
        <img src={plane} style={style.img} />
    );
}

const style = {
    img:{    
        width: '10%',
        position: 'relative',
        top: '20%',
        left: '80%',
    }
}  

export default PlaneObj;
