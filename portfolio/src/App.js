import React, {Component} from 'react';
import Logo from './Logo.js';
import TopBar from './TopBar.js';
import FetchDrinks from './FetchDrinks.js';
import mainImage from './img/WebDesign.png';
import jsCompImage from './img/JS_graphoc.png';
import nextImage from './img/web-design.jpg';
import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      returnedDrink: []
    };
  }

  componentDidMount() {


    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(res => res.json())
      .then(
        (drinkObj) => {
          const drink = this.state.returnedDrink
          drink.splice(0, 1, drinkObj)
          this.setState({
            isLoaded: true,
            returnedDrink: drink
          });
          // console.log(this.state.returnedDrink[0].drinks[0].strDrink);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  renderDrink(){
    const myDrink = this.state.returnedDrink[0]
    // return (<FetchDrinks name = {this.state.returnedDrink[0].drinks[0].strDrink}/>)
    if(this.state.isLoaded){
      console.log(myDrink.drinks[0].strDrink)
    }
    // setTimeout( () => {console.log(myDrink, typeof(myDrink));}, 10000)
  }

  render() {
    return (<div className="App">
      <nav><TopBar/></nav>
      <Zoom >
        <Logo/>

        <div className="main-image-div">
          <img src= {mainImage} className = 'web-design-image' alt="web design" />
        </div>

        <div className="main-intro">
          <h1 className="intro-headline">Hi, I'm Mike. I design & build websites.</h1>
          <p className = "intro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p> </div>

        <div className="next-image-div">
          <img src= {nextImage} className = 'next-image' alt="more web design"/>
        </div>

        <div className="js-comp-image-div">
          <img src= {jsCompImage} className = 'js-comp-image' alt="computer with javascript" />
        </div>
      </Zoom>

      <div className="bottom-space">
        {this.renderDrink()}
      </div>


      <footer className="footer">
          ©Mike Mitchell 2018.  Design & code by Mike Mitchell.
      </footer>

    </div>)

  }
}

export default App;
