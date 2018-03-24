import React, {Component} from 'react';
import MenuIcon from './menuIcon.js'
// import MenuArrow from './menuArrow.js'
import NavButtons from './navButtons.js';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import {spin} from './menuIconKeyframes.css';


const menuArrowDivStyle = {
  paddingTop: '42px',
  paddingLeft: '30px'

}

const menuArrowNoSpin = {
  animationName: 'none',
}

const menuArrowSpin = {
  animationName: 'spin',
  animationDuration: '.4s',
}

const menuItemStyle = {
  color: 'white',
  fontSize: '1.7em',
  marginTop: '30px',
  textTransform: 'uppercase'
}

const menuDescStyle = {
  fontSize: '14px',
  textTransform: 'none',
  fontWeight: 'lighter'

}

const drawerStyle = {
  backgroundColor: 'black',
  opacity: '.8',
  marginTop: '64px',
  height: 'calc(100vh - 98.6px)'

}


const appBarStyle = {
  style: {backgroundColor: 'black', opacity: '.8', width: '100vw', position: 'fixed', display: 'flex', alignItems: 'center'},
  titleStyle: {fontSize: '2.0em', textTransform: 'uppercase', fontWeight: 'bold'}
}


class TopBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuArrowCss: menuArrowNoSpin
    }
  }

  handleDrawerClick = (e) => {
    this.setState({open: !this.state.open});
  }

  handleRequestClose = (e) => {
    this.setState({open: false});
  }

  handleMenuClick(e, url){
    let clickedOn = e.currentTarget.firstChild.firstChild;
    clickedOn.style ="animation-name: spin; animation-duration: .4s;"


    setTimeout( () =>{ clickedOn.style = "animationName: none;"}, 500)
  }

  menuArrow(){
    return(<div className="menu-arrow-div" style={menuArrowDivStyle}>
      <svg className="menu-arrow-svg"
        style={this.state.menuArrowCss} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z"/></svg>
    </div>)
  }

  render() {
    return (<div className="top-nav">
      <MuiThemeProvider>
        <AppBar className = 'top-bar' title="Mike Mitchell"
          iconElementRight = {<NavButtons/>}
          iconElementLeft = {<MenuIcon click = {this.handleDrawerClick}  clickClose={this.handleRequestClose}/>}
          style = {appBarStyle.style}
          titleStyle={appBarStyle.titleStyle}
          zDepth= {0}/>
      </MuiThemeProvider>

      <MuiThemeProvider>
        <Drawer
          onClick = {this.getDrawerHeightNumber}
          containerStyle = {drawerStyle}
          docked={true} open={this.state.open}
          zDepth={0}
          onRequestChange={(open) => this.setState({open})}
          width='50%'>

          <h2 style = {{color: 'white', paddingLeft: '16px'}}>PROJECTS</h2>


          <div className='menu-item-wrapper' ref ="test" onClick = {this.handleMenuClick}>{this.menuArrow()}<MenuItem style = {menuItemStyle}>Monster Run <span className="menu-desc" style={menuDescStyle}>&nbsp;an interactive click game</span></MenuItem></div>

          <div className='menu-item-wrapper'  onClick = { this.handleMenuClick}>{this.menuArrow()}<MenuItem style = {menuItemStyle}>Bar Website<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;a basic HTML/CSS website</span></MenuItem></div>

          <div className='menu-item-wrapper'  ref ="test" onClick = {this.handleMenuClick}  >{this.menuArrow()}<MenuItem style = {menuItemStyle}>Old Portfolio Site<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;another basic HTML/CSS website</span></MenuItem></div>

        </Drawer>
      </MuiThemeProvider>

    </div>);
  }
}
export default TopBar;
