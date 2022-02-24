// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react';
import FoodBox from './FoodBox.example';
import Search from './Search.example';
import AddFoodForm from './AddFoodForm.example';
import NoFood from './NoFood';
import { Row, Divider } from 'antd';

function App({ foodsJSON }) {
  const [foods, setFoods] = useState(foodsJSON);

  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      <Search foods={foods} setFoods={setFoods} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.length > 0 ? (
          foods.map((food) => {
            return (
              <FoodBox
                food={food}
                foods={foods}
                setFoods={setFoods}
                key={food.name}
              />
            );
          })
        ) : (
          <NoFood />
        )}
      </Row>
    </div>
  );
}

export default App;
