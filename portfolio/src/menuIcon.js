

import React, {Component} from 'react';
class MenuIcon extends Component {


  render() {
    return (<div className="menu-icon-div">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white" cursor = 'pointer' onClick={this.props.click} className='menu-svg'><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
    </div>);
  }
}

export default MenuIcon;
