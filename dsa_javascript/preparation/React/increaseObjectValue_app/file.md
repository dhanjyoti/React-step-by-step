<!-- https://stackblitz.com/edit/stackblitz-starters-tblrgv?file=src%2FApp.js -->

```jsx
import React, { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const handleIncreaseClick = (id) => {
    // setProducts((prev) => {
    //   return { ...prev };
    // });
    setProducts(prev =>{
      return prev.map(item=>{
        if(item.id === id){
          return{...item, count: item.count + 1};
        }
        return item;
      })
    })
  };

  return (
    <ul>
      {products.map((item, index) => (
        <li key={item.id}>
          {item.name} (<b>{item.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(item.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
```