import React from 'react';
import { Input } from 'antd';

const Servings = ({ servings, setServings }) => {
  return (
    <div>
      <label>Servings</label>
      <Input
        value={servings}
        type="text"
        onChange={(e) => {
          setServings(e.target.value);
        }}
      />
    </div>
  );
};

export default Servings;
