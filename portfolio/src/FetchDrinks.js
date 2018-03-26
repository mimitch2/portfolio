import React, { Component } from 'react';
import './App.css';

class FetchDrinks extends Component {




  render() {

    return (
      <div className="fetch-drinks">
        <h1>{this.props.name}</h1>
        <img id = "cocktail-image" src={this.props.pic} alt="cocktail" />
      </div>
    );
  }
}

export default FetchDrinks;
