import React, {Fragment} from "react";

const SquareTasks = (props) => {    
    return(
        <Fragment>
        <div style={style.square1}>
            <h1>Upper Bar</h1>        
        </div>

        <div style={style.square2}>
            <h1>Upper Bar</h1>        
        </div>
        </Fragment>
    );
  
}

const style = {
  square1:{    
    top: '15%',
    left: '10%',
    width: '35%',
    height: '70%',
    position: 'absolute',    
    backgroundColor: "#004c00",
  },
  square2:{    
    top: '15%',
    left: '55%',
    width: '35%',
    height: '70%',
    position: 'absolute',    
    backgroundColor: "#00004c",
  }
}  

export default SquareTasks;