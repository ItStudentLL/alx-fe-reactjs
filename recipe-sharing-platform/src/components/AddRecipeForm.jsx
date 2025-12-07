import { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data with target.value
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    // Ingredients validation
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      // Check if ingredients list has at least 2 items (separated by newlines or commas)
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients';
      }
    }

    // Steps validation
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Form is valid, process the data
      console.log('Recipe submitted:', formData);
      setIsSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          ingredients: '',
          steps: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-block mb-6 text-blue-500 hover:text-blue-700 font-medium"
      >
        ← Back to Home
      </Link>
      
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>

        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Recipe submitted successfully! 🎉
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipe Title */}
          <div>
            <label 
              htmlFor="title" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label 
              htmlFor="ingredients" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ingredients
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter ingredients (one per line or separated by commas)&#10;Example:&#10;2 cups flour&#10;1 cup sugar&#10;3 eggs"
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
            <p className="text-gray-500 text-xs mt-1">
              Tip: List at least 2 ingredients, one per line
            </p>
          </div>

          {/* Preparation Steps */}
          <div>
            <label 
              htmlFor="steps" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Preparation Steps
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="8"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none ${
                errors.steps ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter preparation steps&#10;Example:&#10;1. Preheat oven to 350°F&#10;2. Mix dry ingredients&#10;3. Add wet ingredients"
            />
            {errors.steps && (
              <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Submit Recipe
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ title: '', ingredients: '', steps: '' });
                setErrors({});
              }}
              className="flex-1 bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
