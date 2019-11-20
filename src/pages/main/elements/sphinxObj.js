import React from "react";
import sphinx from "../../assets/sphinx.png";

const SphinxObj = (props) => {    
    return(
        <img src={sphinx} style={style.img} />
    );
}

const style = {
    img:{    
        width: '20%',
        position: 'relative',
        top: '65%',
        left: '60%',
        transform: 'scaleX(-1)',
    }
}  

export default SphinxObj;
