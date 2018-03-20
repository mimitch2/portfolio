import React, {Component} from 'react';
import nextImage from './img/web-design.jpg';

class NextImage extends Component {


  render() {
    return (<div className="next-image-div">
      <img src= {nextImage} className = 'next-image' alt="more web design" />
    </div>);
  }
}

export default NextImage;
