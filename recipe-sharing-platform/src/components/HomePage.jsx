import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data from data.json
    import('../data.json')
      .then(module => setRecipes(module.default))
      .catch(error => console.error('Error loading recipes:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div 
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {recipe.summary}
              </p>
              <Link 
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 hover:text-blue-700 font-medium inline-block"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
