import { useState, useEffect } from 'react';
import getRecipes from '../api/getRecipes';

import RecipeCard from '../components/RecipeCard';

export default function RecipesPage(props) {
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes();
            setRecipes(data);
            console.log(recipes);
        };

        fetchRecipes()
        .catch(console.error);
    }, []);

    return <>
        <div className="pb-32">
            <h1 className="text-3xl flex justify-center my-20">All Recipes</h1>
            <div className="flex flex-wrap justify-center gap-10">
                {recipes.map((ele, idx) => {
                   return (
                    <RecipeCard key={idx} recipe={ele} />
                   ); 
                })}
            </div>
        </div>
    </>;
}