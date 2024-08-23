function AboutPage(props) {
    return (        
        <div className="w-3/4 mx-auto flex flex-col items-center p-5 lg:p-20">
        <div className="flex flex-col mb-20 gap-5">
            <h2 className="text-4xl lg:text-5xl mb-5 text-center">Overview</h2>
            <p className="text-lg">Kangacook bridges the gap between traditional culinary heritage and modern digital needs.</p>
            <p className="text-lg">It's a platform for sharing, discovering, and recreating authentic Asian recipes using local ingredients. Kangacook allows users to make the most of their fridge contents and kitchen tools by providing recipes that match their available ingredients and equipment, significantly increasing convenience and reducing the time spent searching for recipes that can be made with what they already have. </p>
        </div>
        <div className="flex flex-col mb-20">
            <h2 className="text-4xl lg:text-5xl mb-10 text-center">Features</h2>
             <ul className="flex flex-col gap-5 list-disc text-lg">
                <li>Recipe Database: Curated collection of authentic Asian recipes.</li>
                <li>Community Interaction: Share and rate recipes, join discussions, and participate in events.</li>
                <li>User-Generated Content: Upload your recipes and photos. </li>
                <li>Personalization: Get personalized recipe recommendations and dietary adaptations. </li>
                <li>E-commerce Integration: Purchase ingredients directly through the platform. </li>
                <li>Ingredient and Tool Utilization: Kangacook allows users to make the most of their fridge contents and kitchen tools by providing recipes that match their available ingredients and equipment, significantly increasing convenience and reducing the time spent searching for recipes that can be made with what they already have. </li>
            </ul>
        </div>

        </div>
    );
}

export default AboutPage;