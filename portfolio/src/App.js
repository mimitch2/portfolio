import React, {Component} from 'react';
import Logo from './RenderLogo.js';
import Footer from './Footer.js';
import TopBar from './topBar.js';
import mainImage from './img/WebDesign.png';
import jsCompImage from './img/JS_graphoc.png';
import nextImage from './img/web-design.jpg';


import './App.css';


class App extends Component {

  render() {
    return (<div className="App">
      <nav><TopBar/></nav>

      <Logo/>

      <div className="main-image-div">
        <img src= {mainImage} className = 'web-design-image' alt="web design" />
      </div>);

      <div className="main-intro">
        <h1 className="into-headline">Hi, I'm Mike. I design & build websites.</h1>
        <p className = "intro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> </div>

      <div className="next-image-div">
        <img src= {nextImage} className = 'next-image' alt="more web design" />
      </div>);
      <div className="js-comp-image-div">
        <img src= {jsCompImage} className = 'js-comp-image' alt="computer with javascript" />
      </div>);
      <div className="bottom-space"></div>

      <footer>
        <Footer/>
      </footer>
    </div>);

  }
}

export default App;
