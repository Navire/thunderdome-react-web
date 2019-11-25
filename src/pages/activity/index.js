import React, {Fragment, Component} from "react";
import background from "../assets/background.png";
import { 
  whatstask,
  SquareTasks,
} from './elements'
import { 
    UpperBar,
    BackBt,
    InfoBt,
} from '../general'

class Main extends Component{
  whatstask = new Audio(whatstask);  

  componentWillUnmount(){
    this.whatstask.pause();    
  }

  render(){     
     this.whatstask.play();     

    return(
    <Fragment>      
      <div style={style.background}>
        <UpperBar>
          <BackBt 
            top='10%'
            left='1%'
            href='/' />
          <InfoBt 
            top='10%'
            right='2%'
          />
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
