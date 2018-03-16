import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import SvgIcon from 'material-ui/SvgIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';


const iconStyles = {
  marginRight: 24,
  marginTop: 12
};

class TopBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

   rightButtons = (props) => (
     <div>
       <SvgIcon style= {iconStyles} onClick = {this.handleMenuClick} {...props}>
         <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
       </SvgIcon>
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
     </div>
   );


  handleMenuClick = (e) => {
    // console.log('hello');
    this.setState({open: !this.state.open});
  }

  handleRequestClose = () => {
    this.setState({open: false});

  };



  render() {
    return (<div className="top-nav">

      <MuiThemeProvider>
        <AppBar title="MJM Web Developing"
          iconElementRight = {this.rightButtons()}
          style = {{backgroundColor: '#2B9395',
            width: '100vw'}}
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
