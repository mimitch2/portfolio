import React, {Component} from 'react';
import logo from './img/mjm_logo_white_300px.png';

class Logo extends Component {


  render() {
    return (<div className="Logo">
      <img src={logo} className="App-logo" alt="logo"/>
    </div>);
  }
}

export default Logo;
