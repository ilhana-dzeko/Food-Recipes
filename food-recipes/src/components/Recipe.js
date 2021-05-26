import React, { useState } from 'react';
import RecipeDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
    const [show,setShow] = useState(false);
    const{label, image, url, ingredients} = recipe.recipe;

    return (
        <div className="recipe">
            
            <img src={image} alt={label}></img>
            <h2>{label}</h2>
            
            <h3 onClick={() => setShow(!show)}>All Ingredients</h3>
            {show && <RecipeDetails ingredients={ingredients}/>}
            <a href={url} target="_blank" rel="noopener noreferrer">Check it Out</a>
        </div>
    );
};

export default Recipe;
