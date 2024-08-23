import { useReducer, useEffect } from 'react';

import updateRecipe from '../api/updateRecipe'

export default function RecipeCard(props) {
    const [currentRecipe, dispatch] = useReducer(reducer, props.recipe);
    console.log(currentRecipe);

    const images = {
        1: '/img/recipes/1.jpg',
        2: '/img/recipes/2.jpg',
        3: '/img/recipes/3.jpg',
        4: '/img/recipes/4.jpg',
        5: '/img/recipes/5.jpg',
    }

    const addViewCount = (e) => {
        dispatch({ type: 'increment_view_count'});
    }

    useEffect(() => {
        const updateViewCount = async () => {
            await updateRecipe(currentRecipe);
        }
        updateViewCount();
    }, [currentRecipe]);

    return (
         <div className="max-w-80 flex flex-col shadow-md pb-10">
            <div className="h-60 bg-orange-400">
                <img className="w-full h-full object-cover" loading='lazy' src={images[currentRecipe.image_url]} alt={currentRecipe.title} />
            </div>
            <div className="flex flex-col items-center p-5">
                <p className="text-xl font-bold mb-5">{currentRecipe.title}</p>
                <p className="mb-10">{currentRecipe.description}</p>
                <button className="text-white font-bold flex flex-wrap justify-center items-center w-32 bg-orange-400 py-2 px-3" onClick={addViewCount}>Add View <span className="text-sm font-normal">(currently {currentRecipe.view_count})</span></button>
            </div>
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment_view_count':
            const updatedState = {...state};
            updatedState.view_count += 1;
            return updatedState;
    }
    throw Error('Unknown action');
}