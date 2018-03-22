import React, {Component} from 'react';
import Logo from './RenderLogo.js';
import Footer from './Footer.js';
import TopBar from './topBar.js';
import MainImage from './mainImage.js'
import NextImage from './nextImage.js'


import './App.css';


class App extends Component {

  render() {
    return (<div className="App">
      <nav><TopBar/></nav>

      <Logo/>

      <MainImage/>

      <div className="main-intro">
        <h1 className="into-headline">Hi, I'm Mike. I design & build websites.</h1>
        <p className = "intro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> </div>

      <NextImage/>
      <div className="bottom-space"></div>

      <footer>
        <Footer/>
      </footer>
    </div>);

  }
}

export default App;
