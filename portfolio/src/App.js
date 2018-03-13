import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from './RenderLogo.js';
import TopNav from './topNav.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {




  render() {
    return (<div className="App">
      <MuiThemeProvider>
        <TopNav/>

      </MuiThemeProvider>
      <Logo/>

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
