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
        <div id="nav-wrapper"><nav>HELLO NAV</nav></div>
      </div>
      <div id='footer-wrapper'>
        <Footer/>
      </div>
    </div>);

  }
}

export default App;
