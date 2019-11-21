import React, {Fragment, Component} from "react";
import background from "../assets/background.png";
import { 
  PlaneObj,
  BallonObj,
  SphinxObj,
  BottomDesert,
  soundEnviroment,
  PyramidObj,
  ThreepyramidObj,
} from './elements'
import { 
  UpperBar,
} from '../general'


class Main extends Component{
  audio = new Audio(soundEnviroment);

  render(){
    // this.audio.play();

    return(
    <Fragment>      
      <div style={style.background}>
        <UpperBar />
        <PlaneObj />
        <BallonObj />
        <BottomDesert />
        <PyramidObj />
        <ThreepyramidObj />
        <SphinxObj />        
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
