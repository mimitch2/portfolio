import React, {Component} from 'react';
import MenuArrow from './menuArrow.js'
import MenuIcon from './menuIcon.js'
import NavButtons from './navButtons.js';
import {Drawer, MenuItem, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/*import ReactDOM from 'react-dom';*/
import './App.css';



const menuItemStyle = {
  color: 'white',
  fontSize: '1.7em',
  marginTop: '30px',
  textTransform: 'uppercase'
}

const menuDescStyle = {
  fontSize: '14px',
  textTransform: 'none',
  fontWeight: 'lighter'

}

const drawerStyle = {
  backgroundColor: 'black',
  opacity: '.8',
  marginTop: '64px',
  height: 'calc(100vh - 99.2px)'
  // boxShadow: 'rgba(0, 0, 0, 0.23) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 0px 0px'
}

const drawerOverlayStyle = {
  // marginTop: '64px',
  // opacity: '.8'
}

const appBarStyle = {
  style: {backgroundColor: 'black', opacity: '.8', width: '100vw', position: 'fixed', display: 'flex', alignItems: 'center'},
  titleStyle: {fontSize: '2.0em', textTransform: 'uppercase', fontWeight: 'lighter'}
}

class TopBar extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      menuContentWidth: ''
    }
  }

  /*componentDidMount() {
    const targetDiv = ReactDOM.findDOMNode(this.refs.menuContent);
    const getWidth =`${targetDiv.getBoundingClientRect().width}px`;
    this.setState({menuContentWidth: getWidth});
    console.log(getWidth, "state:", this.state.menuContentWidth);
  }*/


  handleMenuClick = (e) => {

    this.setState({open: !this.state.open, navIconCss: 'nav-icon-hide'});

  }

  handleRequestClose = (e) => {
    this.setState({open: false});
    this.setState({navIconCss: 'nav-icon'});

  }

  swapCssOnClose=()=>{

  }


  render() {
    return (<div className="top-nav">
      <MuiThemeProvider>
        <AppBar className = 'top-bar' title="Mike Mitchell"
          iconElementRight = {<NavButtons/>}
          iconElementLeft = {<MenuIcon click = {this.handleMenuClick} css={this.state.navIconCss} clickClose={this.handleRequestClose}/>}
          style = {appBarStyle.style}
          titleStyle={appBarStyle.titleStyle}
          zDepth= {0}/>
      </MuiThemeProvider>

      <MuiThemeProvider>
        <Drawer
          onClick = {this.getDrawerHeightNumber}
          containerStyle = {drawerStyle} openSecondary={false}
          docked={true} open={this.state.open}
          zDepth={0}
          onRequestChange={(open) => this.setState({open})}
          overlayStyle = {drawerOverlayStyle} width='50%'>

          <h2 style = {{color: 'white', paddingLeft: '16px'}}>PROJECTS</h2>

          <div ref='menuContent'>
            <a href="http://www.mikejmitchell.com/mainPage/sites/monster-run/index.html" className='menu-item-wrapper' ><MenuArrow/><MenuItem onClick={this.handleRequestClose}
              style = {menuItemStyle}>
            Monster Run <span className="menu-desc" style={menuDescStyle}>&nbsp;an interactive click game</span></MenuItem></a>

            <a href="http://www.mikejmitchell.com/mainPage/sites/Starlight/index.html" className='menu-item-wrapper'><MenuArrow/><MenuItem  onClick={this.handleRequestClose}
              style = {menuItemStyle}>
              Bar Website<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;a basic HTML/CSS website</span></MenuItem></a>

            <a href="http://www.mikejmitchell.com/mainPage/sites/Portfolio/index.html" className='menu-item-wrapper'><MenuArrow/><MenuItem  onClick={this.handleRequestClose}
              style = {menuItemStyle}>
                  Old Portfolio Site<span className="menu-desc" style={menuDescStyle}>&nbsp;&nbsp;&nbsp;another basic HTML/CSS website</span></MenuItem></a>
          </div>

        </Drawer>
      </MuiThemeProvider>

    </div>);
  }
}
export default TopBar;
