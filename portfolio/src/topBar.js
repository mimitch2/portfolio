import React, {Component} from 'react';
import {Drawer, MenuItem} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

export default class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleMenuClick = (e) => {
    // console.log('hello');
    this.setState({open: !this.state.open});
  }

  handleRequestClose = () => {
    this.setState({open: false});

  };

  render() {
    return (<div className="topNav">
      <header className= "top-bar"><span className="title">Mike Mitchell Web Development</span> <nav><span onClick={this.handleMenuClick}>HELLO</span> GOODBYE GOODNIGHT</nav></header>
      <MuiThemeProvider>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleRequestClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleRequestClose}>Menu Item 2</MenuItem>
        </Drawer></MuiThemeProvider>
    </div>);
  }
}
