

import React, {Component} from 'react';
import {spin, spinBackward} from './menuIconKeyframes.css';



/*FIXME this is SUPER hacky, need to refactor all the repetition or try to use state!!*/


let iconStyle = {
  display: 'block',
  animationName: 'none',
  animationDuration: '.4s',
  height: '26px',
  cursor: 'pointer',
  marginRight: '10px',
  marginLeft: '10px',
  marginBottom: '4px',
  fill: 'white',
}

const iconHide = {
  display: 'none'
}

class MenuIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navIconCss: iconStyle,
      cancelIconCss: iconHide,

    }
  }


  handleMenuClick=()=> {

    let newNavObj = {...this.state.navIconCss}
    let newCancelObj = {...this.state.cancelIconCss}
    if(newNavObj.animationName === 'none' || newNavObj.animationName === 'spinBackward') {
      newNavObj = {...iconHide}
      newCancelObj = {...iconStyle}
      newCancelObj.animationName = 'spin'
      this.setState({navIconCss: newNavObj, cancelIconCss: newCancelObj})
      this.props.click();
    }else{
      newNavObj = {...iconStyle}
      newCancelObj = {...iconHide}
      newNavObj.animationName = 'spinBackward'
      this.props.clickClose();
      this.setState({navIconCss: newNavObj, cancelIconCss: newCancelObj})

    }
  }

  render() {
    return (<div>

      <div onClick={this.handleMenuClick} >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className = "menu-icon" style = {this.state.navIconCss}><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
      </div>

      <div onClick={this.handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className = "menu-icon" style = {this.state.cancelIconCss}><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
      </div>

    </div>);

  }
}

export default MenuIcon;
