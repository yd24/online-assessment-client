import axios from 'axios';

export default async function updateRecipe(updatedRecipe) {
    try {
        const id = updatedRecipe.id;
        const response = await axios.put(`https://online-assessment-server.onrender.com/restapi/recipe/${id}/`, updatedRecipe);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}