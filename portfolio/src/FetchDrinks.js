import React, { Component } from 'react';
import './App.css';



class FetchDrinks extends Component {
  render() {

    return (
      <div className="fetch-drinks">
        <div>
          <h1 id = "drink-name">{this.props.name}</h1>

          <img id = "cocktail-image" src={this.props.pic} alt="cocktail" />

        </div>
        <div>
          <p id = "instruction-p">{this.props.instructions}</p>
          <h3 id="recipe-line-one" className = "recipe"> <li>{this.props.measureOne} {this.props.recipeOne}</li></h3>

        </div>

      </div>
    );
  }
}

export default FetchDrinks;
