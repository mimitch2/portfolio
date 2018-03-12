import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './RenderLogo.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {

  // func = () => {
  //   console.log('hello');
  // }

  render() {
    return (<div className="App">
      <div className="Site-content">
        <div id="logo-wrapper"><Logo/></div>
        <div id="stripe-one"></div>
        <div id="stripe-two"></div>
        <div id="stripe-three"></div>
        <div id="nav-wrapper">
          <nav>
            <ul>one</ul>
            <ul>two</ul>
            <ul>three</ul>
          </nav>
        </div>
      </div>
      <div id='footer-wrapper'>
        <Footer/>
      </div>
    </div>);

  }
}

export default App;
