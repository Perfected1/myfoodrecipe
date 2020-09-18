import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const APP_KEY = "7afbf54cc585d5c1840f901fb4396016"
const APP_ID = "a6fad490"



class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`);
        const res = await req.json();
        this.setState({ activeRecipe: res.hits[0].recipe });
    }
    render() {
        // label
        const recipe = this.state.activeRecipe;
        console.log(recipe);
        return (
            <div>
                <div className="container">
                    <div className="active-recipe">
                        <h5>{recipe.label}</h5>
                        <h5>jljj</h5>
                        <img className="active-recipe__img" src={recipe.image} alt={recipe.label} />
                        <h3 className="active-recipe__title">{recipe.label}</h3>
        <h5 className="active-recipe__publisher">Publisher: <span>{recipe.source}</span></h5>
        <p className="active-recipe__website">
           Wesite: <span><a href={recipe.url}>{recipe.url}</a></span>
        </p>
        <button className="active-recipe_button">
                                <Link to={{ pathname: `/` }}>
                                    Go To Main Page
                                </Link>
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recipe;