import React, {Fragment, Component} from "react";
import background from "../assets/background.png";
import { 
  soundActivity, 
  SquareTasks,
} from './elements'
import { 
    UpperBar,
} from '../general'

class Main extends Component{
  audio = new Audio(soundActivity);

  render(){
    // this.audio.play();

    return(
    <Fragment>      
      <div style={style.background}>
        <UpperBar>
            <h1>Upper Bar</h1>
        </UpperBar>
        <SquareTasks />
      </div>      
    </Fragment>
    );
  }
}

const style = {
  background:{    
    width: '100%',
    height: `${window.innerHeight}px`,
    position: 'absolute',
    overflow: 'auto',
    top:'-1px',
    left:'-1px',
    backgroundImage: `url('${background}')`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',

  }
}

export default Main;
