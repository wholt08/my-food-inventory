"use client"
import React, { useState } from 'react';

const FoodInventory = () => {
  const [foods] = useState([
    {
      id: 1,
      name: 'Quinoa',
      category: 'Grains',
      calories: 120,
      description: 'Complete protein grain, rich in fiber and minerals',
      cookingInstructions: '1. Rinse quinoa\n2. Use 2:1 water to quinoa ratio\n3. Bring to boil, then simmer 15-20 mins',
      image: '/images/quinoa.jpg'
    },
    {
      id: 2,
      name: 'Salmon',
      category: 'Protein',
      calories: 208,
      description: 'Rich in omega-3 fatty acids and high-quality protein',
      cookingInstructions: '1. Preheat oven to 400°F\n2. Season with herbs\n3. Bake 12-15 mins',
      image: '/images/salmon.png'
    },
    {
      id: 3,
      name: 'Baked Chicken',
      category: 'Protein',
      calories: 165,
      description: 'Lean protein, versatile and easy to prepare',
      cookingInstructions: '1. Preheat oven to 375°F\n2. Season chicken with olive oil, salt, pepper, and herbs\n3. Bake for 25-30 mins until internal temp reaches 165°F\n4. Let rest 5-10 mins before serving',
      image: '/images/chicken.jpg'
    },
    {
      id: 4,
      name: 'Sheet Pan Fajitas',
      category: 'One Pan Meals',
      calories: 320,
      description: 'Colorful mix of chicken, peppers, and onions with Mexican spices',
      cookingInstructions: '1. Slice chicken, peppers, and onions\n2. Season with fajita spices\n3. Spread on sheet pan\n4. Bake at 400°F for 20-25 mins\n5. Serve with warm tortillas',
      image: '/images/fajitas.jpg'
    },
    {
      id: 5,
      name: 'Chicken Stir Fry',
      category: 'One Pan Meals',
      calories: 280,
      description: 'Quick and healthy mix of chicken and vegetables in sauce',
      cookingInstructions: '1. Cut chicken into bite-sized pieces\n2. Heat wok or large pan with oil\n3. Cook chicken until done\n4. Add vegetables and stir fry 3-4 mins\n5. Add sauce and cook 2 more mins',
      image: '/images/stirfry.jpg'
    },
    {
      id: 6,
      name: 'Greek Salad',
      category: 'Salads',
      calories: 230,
      description: 'Fresh mix of vegetables with feta cheese and olive oil dressing',
      cookingInstructions: '1. Chop cucumbers, tomatoes, red onion\n2. Add kalamata olives and cubed feta\n3. Dress with olive oil, oregano, and vinegar\n4. Toss and serve immediately',
      image: '/images/greeksalad.jpg'
    }
  ]);

  // Rest of the component code stays the same
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoods = foods.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search foods..."
        className="w-full p-2 mb-4 border rounded bg-gray-800 text-white placeholder-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFoods.map(food => (
          <div key={food.id} className="border border-gray-700 rounded-lg overflow-hidden shadow-sm bg-gray-900">
            <img 
              src={food.image} 
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{food.name}</h2>
              <p className="text-gray-400">{food.category} - {food.calories} cal/serving</p>
              <p className="my-2 text-gray-300">{food.description}</p>
              <div className="bg-gray-800 p-2 rounded">
                <h4 className="font-semibold text-white">Cooking Instructions:</h4>
                <p className="whitespace-pre-line text-gray-300">{food.cookingInstructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodInventory;