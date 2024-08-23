import axios from 'axios';

export default async function getRecipes() {
    try {
        const response = await axios.get('https://online-assessment-server.onrender.com/restapi/recipe/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}