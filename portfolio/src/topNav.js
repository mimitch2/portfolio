import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleMenuClick = (e) => {
    console.log('hello');
    this.setState({open: !this.state.open});
  }

  handleRequestClose = () => {
    this.setState({open: false});

  };

  render() {
    return (<div className="topNav">
      <nav><AppBar id= "app-bar"
        title="Mike Mitchell Web Development"
        onLeftIconButtonClick={this.handleMenuClick}/></nav>
      <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}
      >
        <MenuItem onClick={this.handleRequestClose}>Menu Item</MenuItem>
        <MenuItem onClick={this.handleRequestClose}>Menu Item 2</MenuItem>
      </Drawer>
    </div>);
  }
}

export default TopNav;
