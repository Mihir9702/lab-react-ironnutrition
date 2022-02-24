import React from 'react';
import { Input } from 'antd';

const Image = ({ image, setImage }) => {
  return (
    <div>
      <label>Image</label>
      <Input
        value={image}
        type="text"
        onChange={(e) => {
          setImage(e.target.value);
        }}
      />
    </div>
  );
};

export default Image;
