import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../assets/css/home.css';

export default function HomePage(props) {
    return <>
        <Navbar />
        <HeroSection />
        <RecipesSection />
        <Footer />
    </>
}

function HeroSection(props) {
    return (
        <div className="flex h-[88vh] mb-10 lg:mb-20">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-10 lg:pl-14 bg-mobile_hero_1 lg:bg-none bg-cover bg-[center_top_4em] bg-fixed">
                <h1 className="w-full text-5xl md:text-7xl text-white lg:text-black mb-10">Welcome to <strong className="lg:font-normal lg:text-orange-500">Kangacook!</strong></h1>
                <p className="text-3xl md:text-3xl text-white lg:text-black mb-5 text-shadow">Bridging the gap between traditional culinary heritage and modern digital needs.</p>
                <p className="w-full text-xl md:text-xl text-white lg:text-black mb-14 lg:mb-10 text-shadow">Share, discover, and recreate authentic Asian recipes using local ingredients!</p>
                <div className=" md:w-full flex flex-col md:flex-row gap-10">
                    <button className="text-lg font-semibold md:font-normal bg-orange-400 text-white px-3 py-2">See Recipes</button>
                    <button className="text-lg font-semibold md:font-normal bg-orange-400 text-white px-3 py-2">Join our community</button>
                </div>
            </div>
            <div className="hidden w-1/2 lg:flex bg-hero_1 bg-cover bg-center">
            </div>
        </div>
    );
}

function RecipesSection(props) {
    return (
        <div className="max-w-[1600px] mx-auto mb-10">
            <h2 className="flex justify-center text-3xl lg:text-4xl mb-5 lg:mb-10">Trending Recipes</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-10 md:gap-20 px-10 py-5">
                {
                    [...Array(5)].map((ele, idx) => <RecipeCard key={idx} />)
                }
            </div>
        </div>
    );
}

function RecipeCard(props) {
    return (
        <div className="flex flex-col">
            <div className="w-72 h-72 bg-red-300">
                <img src='' alt='' />
            </div>
            <div className="py-3">
                <p className="text-lg">Recipe Card 1</p>
            </div>
        </div>
    )
}