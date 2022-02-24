import React from 'react';
import { Input } from 'antd';

const Calories = ({ calories, setCalories }) => {
  return (
    <div>
      <label>Calories</label>
      <Input
        value={calories}
        type="text"
        onChange={(e) => {
          setCalories(e.target.value);
        }}
      />
    </div>
  );
};

export default Calories;
