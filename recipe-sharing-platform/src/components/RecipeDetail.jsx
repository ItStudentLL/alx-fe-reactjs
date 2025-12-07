import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Load recipe data from data.json and find the matching recipe
    import('../data.json')
      .then(module => {
        const recipes = module.default;
        const foundRecipe = recipes.find(r => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch(error => console.error('Error loading recipe:', error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl text-gray-600">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link 
        to="/" 
        className="inline-block mb-6 text-blue-500 hover:text-blue-700 font-medium"
      >
        ← Back to Recipes
      </Link>

      {/* Recipe header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-64 md:h-96 object-cover"
        />
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {recipe.summary}
          </p>

          {/* Ingredients Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ingredients
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Cooking Instructions
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li 
                    key={index}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
