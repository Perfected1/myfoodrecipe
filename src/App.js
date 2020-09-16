import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
const APP_ID = "a6fad490"
const APP_KEY = "7afbf54cc585d5c1840f901fb4396016"

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=rice&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`);
    const data = await api_call.json();
    this.setState({ recipes: data.hits});
    console.log(this.state.recipes); 
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;