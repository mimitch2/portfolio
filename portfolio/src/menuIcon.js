

import React, {Component} from 'react';
import {spin} from './menuIconKeyframes.css';

const iconStyle = {
  animationName: 'spin',
  animationDuration: '.2s',
  height: '28px',
  cursor: 'pointer',
  marginRight: '10px',
  marginLeft: '10px',
  marginBottom: '8px',
  fill: 'white',
}

const iconHide = {
  display: 'none'
}


class MenuIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navIconCssOpen: iconStyle,
      closeIconCssClose: iconHide
    }
  }

  handleMenuClick=()=> {
    if(this.state.navIconCssOpen === iconStyle) {
      this.props.click();
      this.setState({navIconCssOpen: iconHide, closeIconCssClose: iconStyle});
    }else{
      this.setState({navIconCssOpen: iconStyle, closeIconCssClose: iconHide})
      this.props.clickClose();
    }
  }

  render() {
    return (<div>

      <div style = {this.state.navIconCssOpen}  onClick={this.handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
      </div>

      <div style = {this.state.closeIconCssClose} onClick={this.handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
      </div>
    </div>);
  }
}

export default MenuIcon;

// <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" cursor = 'pointer' onClick={this.props.click} className='menu-svg'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
