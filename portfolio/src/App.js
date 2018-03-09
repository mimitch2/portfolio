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
    return (<div className="App Site">
      <div className= "Site-content">
        <Logo />
      </div>
      <Footer />
    </div>);
  }
}

export default App;
