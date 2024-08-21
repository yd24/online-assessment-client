import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../assets/css/home.css';

export default function HomePage(props) {
    return <>
        <Navbar />
        <HeroSection />
        <RecipesSection />
        <ExpositionSection />
        <Footer />
    </>
}

function HeroSection(props) {
    return (
        <div className="flex h-[88vh]">
            <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-10 lg:pl-14 bg-mobile_hero_1 lg:bg-none bg-cover bg-top bg-scroll">
                <h1 className="text-7xl text-white lg:text-black mb-10">Welcome to <strong className="lg:font-normal lg:text-orange-500">Kangacook!</strong></h1>
                <p className="text-4xl w-full text-white lg:text-black mb-5 text-shadow">Bridging the gap between traditional culinary heritage and modern digital needs.</p>
                <p className="text-2xl w-full text-white lg:text-black mb-14 lg:mb-10 text-shadow">Share, discover, and recreate authentic Asian recipes using local ingredients!</p>
                <div className="flex gap-10">
                    <button className="bg-orange-400 text-white px-5 py-3">See Recipes</button>
                    <button className="bg-orange-400 text-white px-5 py-3">Join our community</button>
                </div>
            </div>
            <div className="hidden lg:flex w-1/2 bg-hero_1 bg-cover bg-center bg-scroll">

            </div>
        </div>
    );
}

function RecipesSection(props) {
    return <></>;
}

function RecipeCard(props) {

}

function ExpositionSection(props) {
    return <></>;
}