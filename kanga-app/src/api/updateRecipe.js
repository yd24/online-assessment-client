import axios from 'axios';

export default async function updateRecipe(updatedRecipe) {
    try {
        const id = updatedRecipe.id;
        const response = await axios.put(`http://localhost:8000/restapi/recipe/${id}/`, updatedRecipe);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}