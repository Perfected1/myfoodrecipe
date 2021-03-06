import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
import Recipes from "./Components/Recipes";

const APP_ID = "a6fad490"
const APP_KEY = "7afbf54cc585d5c1840f901fb4396016"

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`);
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes })
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipies", recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;