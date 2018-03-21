

import React, {Component} from 'react';

const menuIconStyle = {
  display: 'grid',
  gridTemplateRows: '6px 5px 6px 5px 6px',
  height: '28px',
  cursor: 'pointer',
  marginRight: '25px',
  marginLeft: '10px',
  marginBottom: '8px'
}

const rectOneStyle = {
  gridRowStart: '1',
}

const rectTwoStyle = {
  gridRowStart: '3'
}

const rectThreeStyle = {
  gridRowStart: '5'
}

class MenuIcon extends Component {

  render() {
    return (<div className="menu-icon-div" style = {menuIconStyle}  onClick={this.props.click}>
      <svg width="30px" height="6px" viewBox="0 0 40 6" version="1.1" xmlns="http://www.w3.org/2000/svg"  style = {rectOneStyle}>

        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect id="rectangle-one" fill="white" x="0" y="0" width="40" height="6" ></rect>
        </g>
      </svg>

      <svg width="30px" height="6px" viewBox="0 0 40 6" version="1.1" xmlns="http://www.w3.org/2000/svg" style = {rectTwoStyle}>

        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect id="rectangle-two" fill="white" x="0" y="0" width="40" height="6"></rect>
        </g>
      </svg>
      <svg width="30px" height="6px" viewBox="0 0 40 6" version="1.1" xmlns="http://www.w3.org/2000/svg" style = {rectThreeStyle}>

        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <rect id="rectangle-three" fill="white" x="0" y="0" width="40" height="6" ></rect>
        </g>
      </svg>
    </div>);
  }
}

export default MenuIcon;

// <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="white" cursor = 'pointer' onClick={this.props.click} className='menu-svg'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
