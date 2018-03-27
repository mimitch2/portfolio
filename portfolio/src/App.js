import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  removeKeys=()=>{
    console.log(this.state.returnedDrink[0].drinks[0])
    if(this.state.isLoaded){
      const newObj = this.state.returnedDrink[0].drinks[0]

      for (let key in newObj) {
        if(!newObj[key] || newObj[key] === " "){
          delete newObj[key]
        }
        return newObj
      }

    }

  }

  getNewDrink=()=>{
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

        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderDrink(){
    if(this.state.isLoaded){
      
      const myDrink = this.state.returnedDrink[0].drinks[0]
      return (<FetchDrinks name = {myDrink.strDrink} pic = {myDrink.strDrinkThumb} recipeOne = {myDrink.strIngredient1} measureOne = {myDrink.strMeasure1}/>)
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
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

            <div className="cocktail-div">
              {this.renderDrink()} <button type="button" onClick = {this.getNewDrink}>CLICK</button>
            </div>
            <div id = "bottom-space"></div>
          </Zoom>
          <footer className="footer">
          ©Mike Mitchell 2018.  Design & code by Mike Mitchell.
          </footer>

        </div></MuiThemeProvider>)

  }
}

export default App;
