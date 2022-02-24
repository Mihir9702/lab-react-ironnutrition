import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons/lib/icons';

const NoFood = () => {
  return (
    <div>
      <h2>Oops, there's no more food to show</h2>
      <ExclamationCircleOutlined />
    </div>
  );
};

export default NoFood;
