import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getRecipes from '../api/getRecipes';

import '../assets/css/home.css';
import heroBgUrl from '/img/bg_1.jpg';
import RecipeCard from '../components/RecipeCard';

export default function HomePage(props) {
    const [trendingRecipes, setTrendingRecipes] = useState([]);
    
    useEffect(() => {
        const fetchRecipes = async () => {
            const data = await getRecipes();
            data.sort((a, b) => b.view_count - a.view_count);
            setTrendingRecipes(data.slice(0, 4));
        };

        fetchRecipes()
        .catch(console.error);
    }, []);

    return <>
        <HeroSection />
        <RecipesSection trendingRecipes={trendingRecipes}/>
    </>
}

function HeroSection(props) {
    return (
        <div className="flex min-h-[80vh] lg:max-h-[80vh] mb-10 lg:mb-20">
            <div className="lozad flex lg:w-1/2 flex-col items-center lg:items-start justify-center p-10 lg:pl-14 bg-mobile_hero_1 lg:bg-none bg-cover bg-[center_top_4em] bg-fixed">
                <h1 className="w-full text-5xl md:text-7xl text-white lg:text-black mb-10">Welcome to <strong className="lg:font-normal lg:text-orange-500">Kangacook!</strong></h1>
                <p className="text-3xl md:text-3xl text-white lg:text-black mb-5 text-shadow">Bridging the gap between <em className="text-white lg:text-orange-600 font-bold lg:font-normal not-italic">traditional culinary heritage</em> and <em className="text-white lg:text-orange-600 font-bold lg:font-normal not-italic">modern digital needs.</em></p>
                <p className="w-full text-xl md:text-xl text-white lg:text-black mb-14 lg:mb-10 text-shadow">Share, discover, and recreate authentic Asian recipes using local ingredients!</p>
                <div className=" md:w-full flex flex-col md:flex-row items-center gap-10">
                    <Link to="./recipes" ><button className="text-lg font-semibold md:font-normal bg-orange-400 text-white px-3 py-2">See Recipes</button></Link>
                    <Link to="./about" ><button className="text-lg font-semibold md:font-normal bg-orange-400 text-white px-3 py-2">Join our community</button></Link>
                </div>
            </div>
            <img className="hidden lg:flex w-1/2 object-cover bg-orange-400" loading="lazy" src={heroBgUrl} alt="Asian noodles in a bowl" />
        </div>
    );
}

function RecipesSection(props) {
    return (
        <div className="max-w-[1600px] mx-auto mb-10">
            <h2 className="flex justify-center text-3xl lg:text-4xl mb-5 lg:mb-10">Trending Recipes</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20 px-10 py-5">
                {
                    props.trendingRecipes.map((ele, idx) => <RecipeCard key={idx} recipe={ele} />)
                }
            </div>
        </div>
    );
}