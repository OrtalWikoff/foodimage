import React, { useState, useEffect } from "react"
import Recipe from "./Recipe"
import "./App.css"

const App =() => {
const API_KEY = "9d2c2c0555444e479af251f1261d878a";

const [recipes, setRecipes] = useState ([])
const [search, setSearch] = useState('')
const [query, setQuery] = useState('')

    useEffect(() => {
      getRecipes()
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch (
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
      );
      const data = await response.json(); 
        setRecipes(data.results)
        console.log(data.results)
    };

    const updateSearch = e => {
      setSearch(e.target.value); 
      console.log(search)
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch (""); 
    }

    return (
        <div className="App">
          <h1>I need to find a food Image of:</h1>
          <form onSubmit={getSearch} className="search-form">
            <input 
            className="search-bar"
             type="text" 
             value ={search} 
             onChange={updateSearch}
             />
            <button className="search-button" type="submit">
                Search
            </button>
          </form>
          <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
            key={recipe.id}
            title={recipe.title}
            image = {recipe.image}
            />
          ))}
       </div>

        </div>
    )	
}

export default App; 


