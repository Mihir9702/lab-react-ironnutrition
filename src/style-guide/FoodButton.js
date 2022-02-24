import React from 'react';

const FoodButton = ({
  foods,
  setFoods,
  setName,
  setCalories,
  setImage,
  setServings,
}) => {
  const addFood = () => {
    setFoods(
      foods.concat({
        name: name,
        calories: calories,
        image: image,
        servings: servings,
      })
    );
    setName('');
    setCalories('');
    setImage('');
    setServings('');
  };
  return (
    <div>
      FoodButton
      <button onClick={addFood}></button>
    </div>
  );
};

export default FoodButton;
