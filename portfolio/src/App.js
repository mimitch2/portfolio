import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './RenderLogo.js';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false,
      style: {
        color: 'red'
      }
    };


  }

  handleMenuClick = (e) => {
    console.log('hello');
    e.preventDefault();
    this.setState({open: !this.state.open});
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });

  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (<div className="App">
      <MuiThemeProvider>
        <AppBar id= "app-bar"
          title="Mike Mitchell Web Development"
          onLeftIconButtonClick={this.handleMenuClick}/>
        <Popover
          style = {this.state.style}
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}>
          <Menu className ="menu">
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help &amp; feedback" />
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
          </Menu>
        </Popover></MuiThemeProvider>
      <Logo/>
      {/*<div id="stripe-one"></div>
      <div id="stripe-two"></div>
      <div id="stripe-three"></div>*/}
      <div id="nav-wrapper">
        <nav>
          <ul>one</ul>
          <ul>two</ul>
          <ul>three</ul>
        </nav>
      </div>

      <div id="main-intro"><p>I am writing regarding the Quality Assurance Specialist position posted on your website.  As you can see from my resume, I have been in Quality Assurance at Apple  my entire professional career.
About 2 years ago, I decided to leave Apple to travel, explore new interests and move away from the Bay Area.  I landed here in Austin and began attending the Web Development program at Austin Coding Academy in October of 2017.
I am currently learning full stack Javascript, and have already been through HTML, CSS and JQuery.  I have taken quite a liking to it all and I am gaining confidence daily.
This particular position appears to be an excellent fit for my extensive QA experience, and my burgeoning web development career.
I very much appreciate your consideration, and I look forward to speaking with you further regarding this opportunity.
      </p> </div>

      <div id='footer-wrapper'>
        <Footer/>
      </div>
    </div>);

  }
}

export default App;
