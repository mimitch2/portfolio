import React, {Component} from 'react';
import mainImage from './img/WebDesign.png';

class MainImage extends Component {


  render() {
    return (<div className="main-image-div">
      <img src= {mainImage} className = 'web-design-image' alt="web design image" />
    </div>);
  }
}

export default MainImage;
