import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './RenderLogo.js';
import Footer from './Footer.js';
import TopBar from './topBar.js';
import './App.css';

class App extends Component {

  render() {
    return (<div className="App">
      <TopBar/>

      <Logo/>

      <div id="main-intro"><p className = "intro-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> </div>

      <div id='footer-wrapper'>
        <Footer/>
      </div>
    </div>);

  }
}

export default App;
