import React, {Component} from 'react';
import MenuArrow from './menuArrow.js'
import MenuIcon from './menuIcon.js'
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavButtons from './navButtons.js';
import './App.css';



const menuItemStyle = {
  color: 'white',
  fontSize: '2.5em',
  marginTop: '30px',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}

const drawerStyle = {
  backgroundColor: 'black',
  opacity: '.8',
  marginTop: '64px',
  height: 'calc(100% - 100px)',
  boxShadow: 'rgba(0, 0, 0, 0.23) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 0px 0px'
}

const appBarStyle = {
  style: {backgroundColor: 'black', opacity: '.8', width: '100vw', position: 'fixed'},
  titleStyle: {fontSize: '2.2em', fontWeight: 'bold', textTransform: 'uppercase'}
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
          titleStyle={appBarStyle.titleStyle}/>
      </MuiThemeProvider>

      <MuiThemeProvider>
        <Drawer
          onClick = {this.getDrawerHeightNumber}
          containerStyle = {drawerStyle} openSecondary={false}
          docked={false} width= '50%' open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>

          <h2 style = {{color: 'white', paddingLeft: '16px'}} onClick={this.handleRequestClose}>PROJECTS</h2>
          <a href="http://www.apple.com" className='menu-item-wrapper' ><MenuArrow/><MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>
            Menu Item</MenuItem></a>

          <a href="http://www.facebook.com" className='menu-item-wrapper'><MenuArrow/><MenuItem  onClick={this.handleRequestClose}
            style = {menuItemStyle}>
              Menu Item 2</MenuItem></a>

        </Drawer>
      </MuiThemeProvider>

    </div>);
  }
}
export default TopBar;
