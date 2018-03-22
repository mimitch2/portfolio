import React, {Component} from 'react';
import jsCompImage from './img/JS_graphoc.png';

class JsImage extends Component {


  render() {
    return (<div className="js-comp-image-div">
      <img src= {jsCompImage} className = 'js-comp-image' alt="computer with javascript" />
    </div>);
  }
}

export default JsImage;
