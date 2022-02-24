// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';
import Name from './Name';
import Calories from './Calories';
import Servings from './Servings';
import Image from './Image';
import { Button, Divider } from 'antd';

// Iteration 4
function AddFoodForm({ foods, setFoods }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [servings, setServings] = useState('');
  const [showForm, setShowForm] = useState(false);

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

  const inputs = [
    <Name name={name} setName={setName} />,
    <Calories calories={calories} setCalories={setCalories} />,
    <Image image={image} setImage={setImage} />,
    <Servings servings={servings} setServings={setServings} />,
    <Button onClick={addFood}> Create </Button>,
  ];

  return (
    <div>
      <Divider>Add Food Entry</Divider>

      {showForm && inputs.map((input) => input)}

      <br />
      <Button onClick={() => setShowForm(!showForm)}>
        <div>Hide Form / Add New Food</div>
      </Button>
    </div>
  );
}

export default AddFoodForm;
