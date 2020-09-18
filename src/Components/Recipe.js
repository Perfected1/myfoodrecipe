import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const APP_KEY = "7afbf54cc585d5c1840f901fb4396016"
const APP_ID = "a6fad490"



class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const res = await req.json();
        console.log(res.hits[0]);
    
    }
    render() {
        console.log(this.props);
        return (
            <div>
                kdmvm
            </div>
        )
    }
}

export default Recipe;