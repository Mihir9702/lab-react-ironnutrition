// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useEffect, useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
const Search = ({ foods, setFoods }) => {
  const [search, setSearch] = useState('');
  const [sFoods, setSFoods] = useState(foods);

  useEffect(() => {
    setFoods(
      sFoods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, sFoods, setFoods]);

  return (
    <>
      <Divider>Search</Divider>

      <Input
        value={search}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default Search;
