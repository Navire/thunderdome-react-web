import React from "react";
import ballon from "../../assets/balloon.png";
import {Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components';

const BallonObj = (props) => {    
    return(
        <Div>
            <Link to='/activity'>            
                <img alt="balloon" src={ballon} style={style.img} />
            </Link>
        </Div>
    );
}

const keyFrame = keyframes`
    0% {
        top: 15%;
        left: 15%;
    }
    100% {
        top: 8%;
        left: 20%;
    }  
`;

const Div = styled.div`                   
    top: 15%;
    left: 10%;
    position: absolute; 
    animation: ${keyFrame} 2s linear 1s infinite alternate;
`;

const style = {
    img:{    
        width: '50%',                
        transform: 'rotate(20deg)',
    }
}  

export default BallonObj;

