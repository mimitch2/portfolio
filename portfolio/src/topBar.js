import React, {Component} from 'react';
import MenuArrow from './menuArrow.js'
import MenuIcon from './menuIcon.js'
import NavButtons from './navButtons.js';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';



const menuItemStyle = {
  color: 'white',
  fontSize: '2.0em',
  marginTop: '30px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
}

const menuDescStyle = {
  fontSize: '16px',
  textTransform: 'none',
  fontWeight: 'lighter'

}

const drawerStyle = {
  backgroundColor: 'black',
  opacity: '.8',
  marginTop: '64px',
  height: 'calc(100vh - 99.2px)',
  // boxShadow: 'rgba(0, 0, 0, 0.23) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 0px 0px'
}

const appBarStyle = {
  style: {backgroundColor: 'black', opacity: '.8', width: '100vw', position: 'fixed'},
  titleStyle: {fontSize: '2.0em', textTransform: 'uppercase'}
}


class TopBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleMenuClick = (e) => {
    this.setState({open: !this.state.open});
    console.log('HERE');
  }

  handleRequestClose = (e) => {
    this.setState({open: false});
  };


  render() {
    return (<div className="top-nav">
      <MuiThemeProvider>
        <AppBar className = 'top-bar' title="MJM Web Development"
          iconElementRight = {<NavButtons/>}
          iconElementLeft = {<MenuIcon click = {this.handleMenuClick}/>}
          style = {appBarStyle.style}
          titleStyle={appBarStyle.titleStyle}
          zDepth= {0}/>
      </MuiThemeProvider>

      <MuiThemeProvider>
        <Drawer
          onClick = {this.getDrawerHeightNumber}
          containerStyle = {drawerStyle} openSecondary={false}
          docked={false} width= '50%' open={this.state.open}
          zDepth={0}
          onRequestChange={(open) => this.setState({open})}>

          <h2 style = {{color: 'white', paddingLeft: '16px'}} onClick={this.handleRequestClose}>PROJECTS</h2>
          <a href="http://www.mikejmitchell.com/mainPage/sites/monster-run/index.html" className='menu-item-wrapper' ><MenuArrow/><MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>
            Monster Run <span className="menu-desc" style={menuDescStyle}>&nbsp;an interactive click game</span></MenuItem></a>

          <a href="http://www.mikejmitchell.com/mainPage/sites/Starlight/index.html" className='menu-item-wrapper'><MenuArrow/><MenuItem  onClick={this.handleRequestClose}
            style = {menuItemStyle}>
              Bar Website<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;a basic HTML/CSS website</span></MenuItem></a>

          <a href="http://www.mikejmitchell.com/mainPage/sites/Portfolio/index.html" className='menu-item-wrapper'><MenuArrow/><MenuItem  onClick={this.handleRequestClose}
            style = {menuItemStyle}>
                  Old Portfolio Site<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;another basic HTML/CSS website</span></MenuItem></a>

        </Drawer>
      </MuiThemeProvider>

    </div>);
  }
}
export default TopBar;
