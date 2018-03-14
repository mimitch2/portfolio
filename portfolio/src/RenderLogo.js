import React, {Component} from 'react';
import logo from './img/mjm_logo_175px.png';

class Logo extends Component {


  render() {
    return (<div className="logo-div">
      <img src={logo} className="App-logo" alt="logo"/>
    </div>);
  }
}

export default Logo;
