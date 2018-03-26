import React, {Component} from 'react';

/*THis can likely be deleted, it's now inside of TopBar*/


const menuArrowDivStyle = {
  paddingTop: '42px',
  paddingLeft: '30px'

}
class MenuArrow extends Component {

  render() {
    return (<div className="menu-arrow-div" style = {menuArrowDivStyle}>
      <svg className="menu-arrow-svg" style={this.props.arrowStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z"/></svg>
    </div>);
  }
}

export default MenuArrow;
