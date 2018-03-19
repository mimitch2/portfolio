import React, {Component} from 'react';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavButtons from './navButtons.js';
import './App.css';



const menuItemStyle = {
  color: 'white',
  fontSize: '1.2em',
  paddingLeft: '20px'
}

const drawerStyle = {
  backgroundColor: 'black',
  opacity: '.8',
  marginTop: '64px',
  height: 'calc(100% - 100px)'
}

const appBarStyle = {
  style: {backgroundColor: 'black', opacity: '.8',
    width: '100vw', position: 'fixed'},
  titelStyle: {fontSize: '1.9em', fontWeight: 'bold', textTransform: 'uppercase'}
}

class TopBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleMenuClick = (e) => {
    this.setState({open: !this.state.open});

  }

  handleRequestClose = (e) => {
    this.setState({open: false});
  };



  render() {
    return (<div className="top-nav">
      <MuiThemeProvider>
        <AppBar className = 'top-bar' title="MJM Web Development"
          iconElementRight = {<NavButtons/>}
          style = {appBarStyle.style}
          titleStyle = {appBarStyle.titleStyle}
          onLeftIconButtonClick={this.handleMenuClick}/>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Drawer
          onClick = {this.getDrawerHeightNumber}
          containerStyle = {drawerStyle}
          openSecondary={false}
          docked={false}
          width= {173}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <h2 style = {{color: 'white', paddingLeft: '16px'}} onClick={this.handleRequestClose}>PROJECTS</h2>
          <a href="http://www.apple.com"><MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>
            Menu Item</MenuItem></a>
          <MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>
            Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    </div>);
  }
}
export default TopBar;
