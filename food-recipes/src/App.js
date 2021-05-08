import React, {useState} from 'react';
import Axios from 'axios'
import './App.css';

export const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "c66f554d";
    const APP_KEY = "7ce026777c64ec341df1be188d716cd3";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
   
    //query - piece of data that should be updated
    //setQuery - method to do it

    const getData = async() =>{
        const result = await Axios.get(url);

        setRecipes(result.data.hits);

        console.log(result);
        setQuery("");
    }
    
    const onSubmitBtn = (e) =>{
        e.preventDefault();
        getData();
    };

    const onChangeContent = (e) =>{
        setQuery(e.target.value);
    };

    return (
        <div>
            <h1 className="App">Food Searching App</h1>
            <form className="search-form" onSubmit={onSubmitBtn}>
                <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChangeContent} value={query}></input>
                <input type="submit" value="search"></input>
            </form>

            <div className="recipes">
                {recipes != [] && recipes.map(recipe => 
                    <h2>{recipe.recipe.label}</h2>)}
            </div>
        </div>
    );
};

export default App;