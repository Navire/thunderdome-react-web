import React from "react";

const UpperBar = (props) => {    
    return(
      <div style={style.background}>
        <h1>Upper Bar</h1>        
      </div>
    );
  
}

const style = {
  background:{    
    width: '100%',
    height: '8%',
    position: 'absolute',    
    backgroundColor: "#4c0000",
  }
}  

export default UpperBar;
