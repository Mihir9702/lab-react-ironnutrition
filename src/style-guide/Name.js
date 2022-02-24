import React from 'react';
import { Input } from 'antd';

const Name = ({ name, setName }) => {
  return (
    <div>
      <label>Name</label>
      <Input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Name;
