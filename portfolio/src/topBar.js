import React, {Component} from 'react';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import NavButtons from './navButtons.js';
import './App.css';

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
        <AppBar title="MJM Web Development"
          iconElementRight = {<NavButtons/>}
          style = {{backgroundColor: '#2B9395',
            width: '100vw'}}
          titleStyle = {{fontSize: '2.0em', fontWeight: 'bold', textTransform: 'uppercase', color: 'black'}}
          iconStyleLeft = {{color: 'red'}}
          onLeftIconButtonClick={this.handleMenuClick}/>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Drawer
          style = {{backgroundColor: '#2B9395'}}
          openSecondary={false}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleRequestClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Menu Item 2</MenuItem>
        </Drawer>
      </MuiThemeProvider>
    </div>);
  }
}
export default TopBar;
