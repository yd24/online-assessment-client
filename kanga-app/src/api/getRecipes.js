import axios from 'axios';

export default async function getRecipes() {
    try {
        const response = await axios.get('http://localhost:8000/restapi/recipe/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}