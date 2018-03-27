import React, { Component } from 'react';
import './App.css';



class FetchDrinks extends Component {
  render() {

    return (
      <div className="fetch-drinks">
        <div>
          <h1>{this.props.name}</h1>

          <img id = "cocktail-image" src={this.props.pic} alt="cocktail" />
        </div>
        <div>

          <h3 id="recipe-line-one" className = "recipe"> {this.props.measureOne} {this.props.recipeOne}</h3>
        </div>

      </div>
    );
  }
}

export default FetchDrinks;
