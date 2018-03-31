import React, {Component} from 'react';


const iconStyles = {
  color: 'white',
  fontSize: '32px',
  marginRight: '26px',
  marginBottom: "8px",
  cursor: 'pointer',

};



class NavButtons extends Component {


  render() {
    return (<div>
      <a href="https://github.com/mimitch2" target="_blank" rel='noopener noreferrer'><i className="fab fa-github-square nav-icon" style = {iconStyles}></i></a>

      <a href="https://www.linkedin.com/in/mike-mitchell-706a9117/"target="_blank" rel='noopener noreferrer'><i className="fab fa-linkedin nav-icon" style = {iconStyles}></i></a>

      <a href="mailto:<mimitch@mac.com>?subject=I'm interested in your services!"><i className="fas fa-envelope-square nav-icon" style = {iconStyles}></i></a>
    </div>);
  }
}

export default NavButtons;
