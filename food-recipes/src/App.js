import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Recipe from './components/Recipe';
import Alert from './components/Alert';

export const App = () => {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");

    const APP_ID = "c66f554d";
    const APP_KEY = "7ce026777c64ec341df1be188d716cd3";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    //query - piece of data that should be updated
    //setQuery - method to do it

    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if (result.data.more) {
                setRecipes(result.data.hits);
        
                console.log(result);
                setAlert("");
                setQuery("");
            }
            else{
                return setAlert("Food doesn't exist");
            }
        }
        else{
            setAlert("Please input this field.");
        }
    }

    const onSubmitBtn = (e) => {
        e.preventDefault();
        getData();
    };

    const onChangeContent = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="App">
            <div className="main"></div>            
            <div className="rectangle"></div>    

            <h1 className="title">COMIDALY</h1>
            <h3 className="subtitle">Favourite recipes In one place</h3>
            <form className="search-form" onSubmit={onSubmitBtn}>
                {alert!=="" && <Alert alert={alert}/>}
                <input type="text" placeholder="What to cook today?" autoComplete="off" onChange={onChangeContent} value={query}></input>
                <input type="submit" value=""></input>
            </form>

            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <Recipe key={uuidv4()} 
                    recipe={recipe} />)}
            </div>
            
        </div>
    );
};

export default App;