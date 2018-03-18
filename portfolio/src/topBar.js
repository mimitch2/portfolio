import React, {Component} from 'react';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavButtons from './navButtons.js';
import './App.css';



const menuItemStyle = {
  color: 'white',
  fontSize: '1.2em',
  paddingLeft: '20px'
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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar className = 'top-bar' title="MJM Web Development"
          iconElementRight = {<NavButtons/>}
          style = {{backgroundColor: '#2B9395',
            width: '100vw'}}
          titleStyle = {{fontSize: '1.6em', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}
          iconStyleLeft = {{color: 'red'}}
          onLeftIconButtonClick={this.handleMenuClick}/>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Drawer
          containerStyle = {{backgroundColor: 'black'}}
          openSecondary={false}
          docked={false}
          width= {173}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <h2 style = {{color: 'white', paddingLeft: '16px'}} onClick={this.handleRequestClose}>PROJECTS</h2>
          <a href="http://www.apple.com"><MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>Menu Item</MenuItem></a>
          <MenuItem onClick={this.handleRequestClose}
            style = {menuItemStyle}>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    </div>);
  }
}
export default TopBar;
